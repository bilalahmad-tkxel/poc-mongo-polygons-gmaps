<!DOCTYPE html>
<html>
<head>
    <title>Mongo Polygon Search With Google Maps Integration</title>
    <meta charset="utf-8">
    <style>
        html, body, #leftmap, #rightmap {
            margin: 10px;
            padding: 0;
            height: 100%;
        }

        td {
            text-align: left;
        }

        #leftmap, #rightmap {
            width: 500px;
            height: 500px;
        }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=drawing"></script>
    <script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>

    <script>
        var leftMap = null;
        var rightMap = null;
        var drawingManager = null;
        var londonCenter = new google.maps.LatLng(51.501249, -0.126271);
        var crtOverlays = [];
        var leftPolygon = null;
        var rightPolygon = null;

        function addMarker(map, lat, lon, title) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lon),
                map: map,
                title:title
            });
            if (map == rightMap) {
                crtOverlays.push(marker);
            }
        }

        function clearOverlays() {
            for (var i = 0; i < crtOverlays.length; i++) {
                crtOverlays[i].setMap(null);
            }
            crtOverlays = [];

        }

        function searchInPolygon(polygon) {
            drawingManager.setDrawingMode(null);
            clearOverlays();
            var vertices = polygon.getPath();
            var param = "";
            for (var i = 0; i < vertices.length; i++) {
                param += vertices.getAt(i).lat() + "," + vertices.getAt(i).lng();
                if (i < vertices.length - 1) {
                    param += "|";
                }
            }

            $.ajax({
                url: "poly-search.php?polygon=" + param,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function(json) {
                    var stations = json["stations"];
                    for (var i = 0; i < stations.length; i++) {
                        addMarker(rightMap, stations[i]["lon"], stations[i]["lat"], stations[i]["name"]);
                    }
                }});
        }

        function initialize() {
            leftMap = new google.maps.Map(document.getElementById('leftmap'), {
                zoom: 10,
                center: londonCenter,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: true
            });


            rightMap = new google.maps.Map(document.getElementById('rightmap'), {
                zoom: 10,
                center: londonCenter,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                zoomControl: true
            });

            // Keep maps in "sync"
            google.maps.event.addListener(rightMap, 'center_changed', function() {
                leftMap.setZoom(rightMap.getZoom());
                leftMap.setCenter(rightMap.getCenter());
            });
            google.maps.event.addListener(rightMap, 'zoom_changed', function() {
                leftMap.setZoom(rightMap.getZoom());
                leftMap.setCenter(rightMap.getCenter());
            });

            drawingManager = new google.maps.drawing.DrawingManager({
                drawingControl: true,
                drawingControlOptions: {
                    drawingModes: [google.maps.drawing.OverlayType.POLYGON],
                    position: google.maps.ControlPosition.TOP_CENTER
                },
                markerOptions: {
                    draggable: true
                },
                polygonOptions: {
                    strokeWeight: 2,
                    fillOpacity: 0.45,
                    fillColor: "#FF0000",
                    strokeColor: "#FF0000",
                    editable: true
                },
                map: rightMap
            });
            // Show polygon on the left map too
            google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon) {
                google.maps.event.addListener(polygon.getPaths().getAt(0), 'set_at', function() {
                    searchInPolygon(polygon);
                });
                google.maps.event.addListener(polygon.getPaths().getAt(0), 'insert_at', function() {
                    searchInPolygon(polygon);
                });
                google.maps.event.addListener(polygon.getPaths().getAt(0), 'remove_at', function() {
                    searchInPolygon(polygon);
                });

                if (leftPolygon != null) {
                    leftPolygon.setMap(null);
                }
                if (rightPolygon != null) {
                    rightPolygon.setMap(null);
                }
                rightPolygon = polygon;
                searchInPolygon(polygon);
                leftPolygon = new google.maps.Polygon({
                    map: leftMap,
                    paths: polygon.getPaths(),
                    strokeWeight: 2,
                    fillOpacity: 0.45,
                    fillColor: "#FF0000",
                    strokeColor: "#FF0000",
                    editable: false
                });
            });

        <?php
        try {
            $conn = new Mongo('localhost');
            $db = $conn->stationsdb;
            $collection = $db->stations;
            $cursor = $collection->find();
            foreach ($cursor as $obj) {
                echo 'addMarker(leftMap, ' . $obj['pos']['lon'] . ',' . $obj['pos']['lat'] . ");";
            }
            $conn->close();
        } catch (MongoConnectionException $e) {
            die('Error connecting to MongoDB server');
        } catch (MongoException $e) {
            die('Error: ' . $e->getMessage());
        }
        ?>

        }

        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
</head>
<body>
    <table width="100%">
        <tr>
            <td>
                <div id="leftmap"></div>
            </td>
            <td width="100%">
                <div id="rightmap"></div>
            </td>
        </tr>
    </table>
</body>
</html>
