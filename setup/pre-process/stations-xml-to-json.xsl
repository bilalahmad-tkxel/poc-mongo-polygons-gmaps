<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:kml="http://earth.google.com/kml/2.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:output method="text"/>
    <xsl:template match="/">
db.stations.drop();
stations = [ <xsl:apply-templates select="//kml:Placemark"/> ];
db.stations.save(stations);
db.stations.ensureIndex( { pos : "2d" } );
    </xsl:template>

    <xsl:template match="kml:Placemark">
        {
            name: "<xsl:value-of select="./kml:name"/>",
            pos: { lat: <xsl:value-of select="./kml:Point/kml:lat"/>, lon: <xsl:value-of select="./kml:Point/kml:lon"/> },
            description: '<xsl:value-of select="./kml:description"/>'
        }
        <xsl:if test="not(position() = last())">,</xsl:if>
    </xsl:template>
</xsl:stylesheet>