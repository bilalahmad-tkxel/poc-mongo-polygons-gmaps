{ "stations" :[
<?php
try {
    $conn = new Mongo('localhost');
    $db = $conn->stationsdb;
    $collection = $db->stations;
    $poly = array();
    $points = explode("|", $_GET["polygon"]);
    foreach ($points as $point) {
        $latLon = explode(",", $point);
        array_push($poly, array(floatval($latLon[1]), floatval($latLon[0])));
    }
    $cursor = $collection->find(array("pos" => array('$within' => array('$polygon' => $poly))));
    foreach ($cursor as $obj) {
        echo '{ "lon": ' . $obj['pos']['lon'] . ', "lat":' . $obj['pos']['lat'] . ', "name": "' . $obj['name'] . '" },';
    }
    echo '{ "lon": 0, "lat": 0, "name": "none" }';
    $conn->close();
} catch (MongoConnectionException $e) {
    die('Error connecting to MongoDB server');
} catch (MongoException $e) {
    die('Error: ' . $e->getMessage());
}
?>
]}