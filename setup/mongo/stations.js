
db.stations.drop();
stations = [ 
        {
            name: "Abbey Wood",
            pos: { lat: 0.1229, lon: 51.4915 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#GeoGroup">List of London railway stations</a>'
        }
        ,
        {
            name: "Acton Central",
            pos: { lat: -0.2634, lon: 51.5088 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#GeoGroup">List of London railway stations</a>'
        }
        ,
        {
            name: "Acton Main Line",
            pos: { lat: -0.2669, lon: 51.5169 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Albany Park",
            pos: { lat: 0.1266, lon: 51.4358 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Alexandra Palace",
            pos: { lat: -0.1197, lon: 51.5983 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-2">List of London railway stations</a>'
        }
        ,
        {
            name: "Amersham",
            pos: { lat: -0.6088, lon: 51.6747 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Anerley",
            pos: { lat: -0.0651, lon: 51.4125 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Angel Road",
            pos: { lat: -0.0495, lon: 51.6118 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Balham",
            pos: { lat: -0.152, lon: 51.4426 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Barking",
            pos: { lat: 0.0817, lon: 51.5393 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Barnehurst",
            pos: { lat: 0.1595, lon: 51.4648 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Barnes",
            pos: { lat: -0.242, lon: 51.4671 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Barnes Bridge",
            pos: { lat: -0.2523, lon: 51.4722 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Battersea",
            pos: { lat: -0.1477, lon: 51.4779 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Beckenham Hill",
            pos: { lat: -0.0161, lon: 51.4246 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Beckenham Junction",
            pos: { lat: -0.0257, lon: 51.4109 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Bellingham",
            pos: { lat: -0.0199, lon: 51.4342 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Belmont",
            pos: { lat: -0.1986, lon: 51.344 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Belvedere",
            pos: { lat: 0.1524, lon: 51.4927 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Berrylands",
            pos: { lat: -0.2803, lon: 51.3988 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Bethnal Green",
            pos: { lat: -0.0595, lon: 51.523 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-4">List of London railway stations</a>'
        }
        ,
        {
            name: "Bexley",
            pos: { lat: 0.1479, lon: 51.4403 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-4">List of London railway stations</a>'
        }
        ,
        {
            name: "Bexleyheath",
            pos: { lat: 0.1338, lon: 51.4635 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Bickley",
            pos: { lat: 0.0441, lon: 51.3995 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Birkbeck",
            pos: { lat: -0.0568, lon: 51.4039 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Blackfriars",
            pos: { lat: -0.103, lon: 51.5116 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Blackheath",
            pos: { lat: 0.0064, lon: 51.4663 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Blackhorse Road",
            pos: { lat: -0.0416, lon: 51.5866 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Bowes Park",
            pos: { lat: -0.1209, lon: 51.6078 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Brentford",
            pos: { lat: -0.3096, lon: 51.4875 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Brimsdown",
            pos: { lat: -0.0301, lon: 51.6556 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Brixton",
            pos: { lat: -0.1132, lon: 51.4629 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Brockley",
            pos: { lat: -0.0369, lon: 51.4645 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Bromley North",
            pos: { lat: 0.0179, lon: 51.4088 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Bromley South",
            pos: { lat: 0.0181, lon: 51.4004 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Brondesbury",
            pos: { lat: -0.202, lon: 51.5451 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Brondesbury Park",
            pos: { lat: -0.2103, lon: 51.5407 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Bruce Grove",
            pos: { lat: -0.0704, lon: 51.594 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Bushey",
            pos: { lat: -0.385, lon: 51.644 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Bush Hill Park",
            pos: { lat: -0.0691, lon: 51.6418 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-6">List of London railway stations</a>'
        }
        ,
        {
            name: "Caledonian Road & Barnsbury",
            pos: { lat: -0.1145, lon: 51.5432 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-6">List of London railway stations</a>'
        }
        ,
        {
            name: "Cambridge Heath",
            pos: { lat: -0.0572, lon: 51.5321 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-6">List of London railway stations</a>'
        }
        ,
        {
            name: "Camden Road",
            pos: { lat: -0.1401, lon: 51.5444 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-6">List of London railway stations</a>'
        }
        ,
        {
            name: "Canada Water",
            pos: { lat: -0.05, lon: 51.4983 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-6">List of London railway stations</a>'
        }
        ,
        {
            name: "Cannon Street",
            pos: { lat: -0.0912, lon: 51.5101 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Canonbury",
            pos: { lat: -0.0925, lon: 51.5482 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Carpenders Park",
            pos: { lat: -0.386, lon: 51.629 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Carshalton",
            pos: { lat: -0.1659, lon: 51.3686 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Carshalton Beeches",
            pos: { lat: -0.1714, lon: 51.3577 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-7">List of London railway stations</a>'
        }
        ,
        {
            name: "Castle Bar Park",
            pos: { lat: -0.3323, lon: 51.5228 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-7">List of London railway stations</a>'
        }
        ,
        {
            name: "Caterham",
            pos: { lat: -0.0783, lon: 51.28214 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Catford",
            pos: { lat: -0.0261, lon: 51.4447 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Catford Bridge",
            pos: { lat: -0.025, lon: 51.4446 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Chadwell Heath",
            pos: { lat: 0.1292, lon: 51.5678 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Chafford Hundred",
            pos: { lat: 0.2876, lon: 51.4859 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Chalfont & Latimer",
            pos: { lat: -0.561, lon: 51.6679 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Charing Cross",
            pos: { lat: -0.1231, lon: 51.5075 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Charlton",
            pos: { lat: 0.031, lon: 51.4868 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Cheam",
            pos: { lat: -0.2147, lon: 51.356 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Chelsfield",
            pos: { lat: 0.1076, lon: 51.3565 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Chessington North",
            pos: { lat: -0.3005, lon: 51.3642 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Chessington South",
            pos: { lat: -0.308, lon: 51.3569 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Chingford",
            pos: { lat: 0.0094, lon: 51.6331 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Chislehurst",
            pos: { lat: 0.0573, lon: 51.4057 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Chiswick",
            pos: { lat: -0.2683, lon: 51.4813 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-8">List of London railway stations</a>'
        }
        ,
        {
            name: "Chorleywood",
            pos: { lat: -0.5183, lon: 51.6541 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "City Thameslink",
            pos: { lat: -0.1037, lon: 51.5163 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Clapham High Street",
            pos: { lat: -0.1328, lon: 51.4658 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Clapham Junction",
            pos: { lat: -0.1703, lon: 51.4644 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Clapton",
            pos: { lat: -0.0571, lon: 51.5617 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Clock House",
            pos: { lat: -0.0411, lon: 51.4088 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Coulsdon South",
            pos: { lat: -0.138, lon: 51.3157 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Smitham",
            pos: { lat: -0.134, lon: 51.3219 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Crayford",
            pos: { lat: 0.1786, lon: 51.4483 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Crews Hill",
            pos: { lat: -0.1072, lon: 51.6845 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Cricklewood",
            pos: { lat: -0.2129, lon: 51.5586 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Crofton Park",
            pos: { lat: -0.0367, lon: 51.455 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Crouch Hill",
            pos: { lat: -0.1171, lon: 51.572 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Crystal Palace",
            pos: { lat: -0.0726, lon: 51.4182 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Dagenham Dock",
            pos: { lat: 0.145, lon: 51.5268 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Dalston Junction",
            pos: { lat: -0.0747, lon: 51.5453 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_c">List of London railway stations</a>'
        }
        ,
        {
            name: "Dalston Kingsland",
            pos: { lat: -0.0763, lon: 51.5482 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_c">List of London railway stations</a>'
        }
        ,
        {
            name: "Dartford",
            pos: { lat: 0.2193, lon: 51.4475 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-freedom_10-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Denmark Hill",
            pos: { lat: -0.0894, lon: 51.4683 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-freedom_10-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Deptford",
            pos: { lat: -0.0265, lon: 51.4788 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-freedom_10-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Drayton Green",
            pos: { lat: -0.33, lon: 51.5165 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-11">List of London railway stations</a>'
        }
        ,
        {
            name: "Drayton Park",
            pos: { lat: -0.1055, lon: 51.5528 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-11">List of London railway stations</a>'
        }
        ,
        {
            name: "Ealing Broadway",
            pos: { lat: -0.3017, lon: 51.5147 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-11">List of London railway stations</a>'
        }
        ,
        {
            name: "Earlsfield",
            pos: { lat: -0.1877, lon: 51.4424 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-0">List of London railway stations</a>'
        }
        ,
        {
            name: "East Croydon",
            pos: { lat: -0.093, lon: 51.3753 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-13">List of London railway stations</a>'
        }
        ,
        {
            name: "East Dulwich",
            pos: { lat: -0.0804, lon: 51.4616 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-13">List of London railway stations</a>'
        }
        ,
        {
            name: "Eden Park",
            pos: { lat: -0.0262, lon: 51.39 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-13">List of London railway stations</a>'
        }
        ,
        {
            name: "Edmonton Green",
            pos: { lat: -0.0614, lon: 51.6242 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-13">List of London railway stations</a>'
        }
        ,
        {
            name: "Elephant & Castle",
            pos: { lat: -0.0986, lon: 51.4938 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-14">List of London railway stations</a>'
        }
        ,
        {
            name: "Elmers End",
            pos: { lat: -0.0496, lon: 51.3981 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-14">List of London railway stations</a>'
        }
        ,
        {
            name: "Elmstead Woods",
            pos: { lat: 0.0441, lon: 51.4168 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-14">List of London railway stations</a>'
        }
        ,
        {
            name: "Elstree & Borehamwood",
            pos: { lat: -0.2802, lon: 51.6531 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Eltham",
            pos: { lat: 0.0515, lon: 51.4555 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Emerson Park",
            pos: { lat: 0.2204, lon: 51.5687 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Enfield Chase",
            pos: { lat: -0.0908, lon: 51.6529 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Enfield Lock",
            pos: { lat: -0.0284, lon: 51.6709 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-16">List of London railway stations</a>'
        }
        ,
        {
            name: "Enfield Town",
            pos: { lat: -0.0792, lon: 51.6516 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-2">List of London railway stations</a>'
        }
        ,
        {
            name: "Erith",
            pos: { lat: 0.1754, lon: 51.4816 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-17">List of London railway stations</a>'
        }
        ,
        {
            name: "Essex Road",
            pos: { lat: -0.0963, lon: 51.5406 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-17">List of London railway stations</a>'
        }
        ,
        {
            name: "Euston",
            pos: { lat: -0.1345, lon: 51.5287 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Ewell East",
            pos: { lat: -0.2419, lon: 51.3451 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Ewell West",
            pos: { lat: -0.2569, lon: 51.3502 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Falconwood",
            pos: { lat: 0.0799, lon: 51.4592 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Farringdon",
            pos: { lat: -0.1053, lon: 51.5206 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Feltham",
            pos: { lat: -0.4088, lon: 51.4481 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Fenchurch Street",
            pos: { lat: -0.0783, lon: 51.5114 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Finchley Road & Frognal",
            pos: { lat: -0.1837, lon: 51.5499 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Finsbury Park",
            pos: { lat: -0.1836, lon: 51.5502 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Forest Gate",
            pos: { lat: 0.0242, lon: 51.5494 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-18">List of London railway stations</a>'
        }
        ,
        {
            name: "Forest Hill",
            pos: { lat: -0.0533, lon: 51.4393 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-18">List of London railway stations</a>'
        }
        ,
        {
            name: "Fulwell",
            pos: { lat: -0.3508, lon: 51.4334 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-19">List of London railway stations</a>'
        }
        ,
        {
            name: "Gidea Park",
            pos: { lat: 0.2063, lon: 51.582 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-20">List of London railway stations</a>'
        }
        ,
        {
            name: "Gipsy Hill",
            pos: { lat: -0.084, lon: 51.4246 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Goodmayes",
            pos: { lat: 0.1109, lon: 51.5655 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Gordon Hill",
            pos: { lat: -0.0943, lon: 51.6632 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Gospel Oak",
            pos: { lat: -0.1514, lon: 51.5552 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Grange Park",
            pos: { lat: -0.0969, lon: 51.6431 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-enfield.gov.uk_9-4">List of London railway stations</a>'
        }
        ,
        {
            name: "Grays",
            pos: { lat: 0.322, lon: 51.476 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Greenford",
            pos: { lat: -0.3463, lon: 51.5426 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Greenwich",
            pos: { lat: -0.0134, lon: 51.4782 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Grove Park",
            pos: { lat: 0.0219, lon: 51.4306 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Gunnersbury",
            pos: { lat: -0.275, lon: 51.4918 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Hackbridge",
            pos: { lat: -0.1539, lon: 51.3778 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-2">List of London railway stations</a>'
        }
        ,
        {
            name: "Hackney Central",
            pos: { lat: -0.0559, lon: 51.547 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_c">List of London railway stations</a>'
        }
        ,
        {
            name: "Hackney Downs",
            pos: { lat: -0.0601, lon: 51.5483 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceA_22-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Hackney Wick",
            pos: { lat: -0.0249, lon: 51.5432 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceA_22-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Hadley Wood",
            pos: { lat: -0.1761, lon: 51.6688 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-23">List of London railway stations</a>'
        }
        ,
        {
            name: "Haggerston",
            pos: { lat: -0.0736, lon: 51.5381 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_c">List of London railway stations</a>'
        }
        ,
        {
            name: "Hampstead Heath",
            pos: { lat: -0.1654, lon: 51.5553 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_c">List of London railway stations</a>'
        }
        ,
        {
            name: "Hampton",
            pos: { lat: -0.3717, lon: 51.4159 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-3">List of London railway stations</a>'
        }
        ,
        {
            name: "Hampton Court",
            pos: { lat: -0.3425, lon: 51.4028 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Hampton Wick",
            pos: { lat: -0.3107, lon: 51.4141 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Hanwell",
            pos: { lat: -0.3389, lon: 51.5116 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-24">List of London railway stations</a>'
        }
        ,
        {
            name: "Harlesden",
            pos: { lat: -0.2581, lon: 51.5363 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-24">List of London railway stations</a>'
        }
        ,
        {
            name: "Harold Wood",
            pos: { lat: 0.2343, lon: 51.5928 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-25">List of London railway stations</a>'
        }
        ,
        {
            name: "Harringay",
            pos: { lat: -0.1052, lon: 51.577 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-26">List of London railway stations</a>'
        }
        ,
        {
            name: "Harringay Green Lanes",
            pos: { lat: -0.0977, lon: 51.5774 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-27">List of London railway stations</a>'
        }
        ,
        {
            name: "Harrow & Wealdstone",
            pos: { lat: -0.3347, lon: 51.5921 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-27">List of London railway stations</a>'
        }
        ,
        {
            name: "Harrow-on-the-Hill",
            pos: { lat: -0.337, lon: 51.5794 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-27">List of London railway stations</a>'
        }
        ,
        {
            name: "Hatch End",
            pos: { lat: -0.3682, lon: 51.6097 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceB_28-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Haydons Road",
            pos: { lat: -0.188, lon: 51.4255 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceB_28-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Hayes",
            pos: { lat: 0.0102, lon: 51.3765 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceB_28-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Hayes & Harlington",
            pos: { lat: -0.4203, lon: 51.5031 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-29">List of London railway stations</a>'
        }
        ,
        {
            name: "Headstone Lane",
            pos: { lat: -0.3566, lon: 51.6019 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-30">List of London railway stations</a>'
        }
        ,
        {
            name: "Heathrow Terminals 123",
            pos: { lat: -0.454, lon: 51.471 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-30">List of London railway stations</a>'
        }
        ,
        {
            name: "Heathrow Terminal 4",
            pos: { lat: -0.445, lon: 51.458 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-30">List of London railway stations</a>'
        }
        ,
        {
            name: "Heathrow Terminal 5",
            pos: { lat: -0.488, lon: 51.4723 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-30">List of London railway stations</a>'
        }
        ,
        {
            name: "Hendon",
            pos: { lat: -0.2389, lon: 51.58 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-30">List of London railway stations</a>'
        }
        ,
        {
            name: "Herne Hill",
            pos: { lat: -0.1021, lon: 51.4533 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-30">List of London railway stations</a>'
        }
        ,
        {
            name: "Highams Park",
            pos: { lat: -0.0001, lon: 51.6084 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-31">List of London railway stations</a>'
        }
        ,
        {
            name: "Highbury & Islington",
            pos: { lat: -0.105, lon: 51.5458 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_e">List of London railway stations</a>'
        }
        ,
        {
            name: "Hither Green",
            pos: { lat: -0.0008, lon: 51.4519 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_e">List of London railway stations</a>'
        }
        ,
        {
            name: "Homerton",
            pos: { lat: -0.0431, lon: 51.547 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_e">List of London railway stations</a>'
        }
        ,
        {
            name: "Honor Oak Park",
            pos: { lat: -0.0456, lon: 51.4501 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_e">List of London railway stations</a>'
        }
        ,
        {
            name: "Haringey",
            pos: { lat: -0.1116, lon: 51.5862 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-32">List of London railway stations</a>'
        }
        ,
        {
            name: "Hounslow",
            pos: { lat: -0.3622, lon: 51.462 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceC_33-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Hoxton",
            pos: { lat: -0.0754, lon: 51.5318 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceC_33-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Ilford",
            pos: { lat: 0.0696, lon: 51.5586 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-34">List of London railway stations</a>'
        }
        ,
        {
            name: "Imperial Wharf",
            pos: { lat: -0.1828, lon: 51.4751 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-34">List of London railway stations</a>'
        }
        ,
        {
            name: "Isleworth",
            pos: { lat: -0.337, lon: 51.4749 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-4">List of London railway stations</a>'
        }
        ,
        {
            name: "Kenley",
            pos: { lat: -0.1007, lon: 51.3246 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-35">List of London railway stations</a>'
        }
        ,
        {
            name: "Kensal Green",
            pos: { lat: -0.2243, lon: 51.5306 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-35">List of London railway stations</a>'
        }
        ,
        {
            name: "Kensal Rise",
            pos: { lat: -0.2204, lon: 51.5345 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-35">List of London railway stations</a>'
        }
        ,
        {
            name: "Kensington (Olympia)",
            pos: { lat: -0.211, lon: 51.4985 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-35">List of London railway stations</a>'
        }
        ,
        {
            name: "Kent House",
            pos: { lat: -0.0453, lon: 51.4123 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-35">List of London railway stations</a>'
        }
        ,
        {
            name: "Kentish Town",
            pos: { lat: -0.1396, lon: 51.5505 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-35">List of London railway stations</a>'
        }
        ,
        {
            name: "Kentish Town West",
            pos: { lat: -0.1468, lon: 51.5468 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-35">List of London railway stations</a>'
        }
        ,
        {
            name: "Kenton",
            pos: { lat: -0.3167, lon: 51.5818 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-35">List of London railway stations</a>'
        }
        ,
        {
            name: "Kew Bridge",
            pos: { lat: -0.2878, lon: 51.4895 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceC_33-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Kew Gardens",
            pos: { lat: -0.2849, lon: 51.4772 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceC_33-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Kidbrooke",
            pos: { lat: 0.0273, lon: 51.4621 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceC_33-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Kilburn High Road",
            pos: { lat: -0.1925, lon: 51.5373 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceC_33-1">List of London railway stations</a>'
        }
        ,
        {
            name: "King's Cross",
            pos: { lat: -0.1233, lon: 51.5324 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Kingston",
            pos: { lat: -0.3019, lon: 51.4129 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-36">List of London railway stations</a>'
        }
        ,
        {
            name: "Kingswood",
            pos: { lat: -0.211, lon: 51.295 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Knockholt",
            pos: { lat: 0.1307, lon: 51.3459 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Ladywell",
            pos: { lat: -0.0192, lon: 51.4562 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Lee",
            pos: { lat: 0.0128, lon: 51.4497 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Lewisham",
            pos: { lat: -0.0141, lon: 51.4658 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Leyton Midland Road",
            pos: { lat: -0.0072, lon: 51.5693 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Leytonstone High Road",
            pos: { lat: 0.0073, lon: 51.5634 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Tower Hamlets",
            pos: { lat: -0.0402, lon: 51.5126 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-5">List of London railway stations</a>'
        }
        ,
        {
            name: "Liverpool Street",
            pos: { lat: -0.0819, lon: 51.5185 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "London Bridge",
            pos: { lat: -0.0851, lon: 51.5053 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "London Fields",
            pos: { lat: -0.0577, lon: 51.5407 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Loughborough Junction",
            pos: { lat: -0.102, lon: 51.4661 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Lower Sydenham",
            pos: { lat: -0.0336, lon: 51.4245 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Malden Manor",
            pos: { lat: -0.2618, lon: 51.3847 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Manor Park",
            pos: { lat: 0.0463, lon: 51.5526 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-37">List of London railway stations</a>'
        }
        ,
        {
            name: "Maryland",
            pos: { lat: 0.0059, lon: 51.546 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-38">List of London railway stations</a>'
        }
        ,
        {
            name: "Marylebone",
            pos: { lat: -0.163, lon: 51.5231 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Maze Hill",
            pos: { lat: 0.0032, lon: 51.483 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-39">List of London railway stations</a>'
        }
        ,
        {
            name: "Mill Hill Broadway",
            pos: { lat: -0.2491, lon: 51.6128 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-39">List of London railway stations</a>'
        }
        ,
        {
            name: "Mitcham Eastfields",
            pos: { lat: -0.1547, lon: 51.4077 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-39">List of London railway stations</a>'
        }
        ,
        {
            name: "Mitcham Junction",
            pos: { lat: -0.1576, lon: 51.393 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-40">List of London railway stations</a>'
        }
        ,
        {
            name: "Moorgate",
            pos: { lat: -0.0896, lon: 51.5187 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Morden South",
            pos: { lat: -0.199, lon: 51.3965 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Mortlake",
            pos: { lat: -0.2672, lon: 51.4682 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "Motspur Park",
            pos: { lat: -0.2397, lon: 51.3958 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "Mottingham",
            pos: { lat: 0.0504, lon: 51.4401 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "New Barnet",
            pos: { lat: -0.1738, lon: 51.6488 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "New Beckenham",
            pos: { lat: -0.0348, lon: 51.4164 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "New Cross",
            pos: { lat: -0.0325, lon: 51.476 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "New Cross Gate",
            pos: { lat: -0.0406, lon: 51.4752 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "New Eltham",
            pos: { lat: 0.0705, lon: 51.438 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "New Malden",
            pos: { lat: -0.256, lon: 51.4039 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-6">List of London railway stations</a>'
        }
        ,
        {
            name: "New Southgate",
            pos: { lat: -0.1432, lon: 51.6142 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-41">List of London railway stations</a>'
        }
        ,
        {
            name: "Norbiton",
            pos: { lat: -0.2838, lon: 51.4124 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-7">List of London railway stations</a>'
        }
        ,
        {
            name: "Norbury",
            pos: { lat: -0.1214, lon: 51.4114 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-42">List of London railway stations</a>'
        }
        ,
        {
            name: "North Dulwich",
            pos: { lat: -0.0887, lon: 51.4543 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-8">List of London railway stations</a>'
        }
        ,
        {
            name: "Northolt Park",
            pos: { lat: -0.3595, lon: 51.5574 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-8">List of London railway stations</a>'
        }
        ,
        {
            name: "North Sheen",
            pos: { lat: -0.2865, lon: 51.4656 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-9">List of London railway stations</a>'
        }
        ,
        {
            name: "Northumberland Park",
            pos: { lat: -0.0551, lon: 51.5986 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-9">List of London railway stations</a>'
        }
        ,
        {
            name: "North Wembley",
            pos: { lat: -0.304, lon: 51.5627 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-9">List of London railway stations</a>'
        }
        ,
        {
            name: "Norwood Junction",
            pos: { lat: -0.0749, lon: 51.3971 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-9">List of London railway stations</a>'
        }
        ,
        {
            name: "Nunhead",
            pos: { lat: -0.0527, lon: 51.4671 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-9">List of London railway stations</a>'
        }
        ,
        {
            name: "Oakleigh Park",
            pos: { lat: -0.1667, lon: 51.6379 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-43">List of London railway stations</a>'
        }
        ,
        {
            name: "Ockendon",
            pos: { lat: 0.29, lon: 51.52 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Old Street",
            pos: { lat: -0.085, lon: 51.5258 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Orpington",
            pos: { lat: 0.0885, lon: 51.3741 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Paddington",
            pos: { lat: -0.1769, lon: 51.5171 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Palmers Green",
            pos: { lat: -0.1102, lon: 51.6184 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-44">List of London railway stations</a>'
        }
        ,
        {
            name: "Peckham Rye",
            pos: { lat: -0.0691, lon: 51.4701 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-44">List of London railway stations</a>'
        }
        ,
        {
            name: "Penge East",
            pos: { lat: -0.0537, lon: 51.4191 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-44">List of London railway stations</a>'
        }
        ,
        {
            name: "Penge West",
            pos: { lat: -0.0606, lon: 51.4174 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-44">List of London railway stations</a>'
        }
        ,
        {
            name: "Petts Wood",
            pos: { lat: 0.0742, lon: 51.3889 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-44">List of London railway stations</a>'
        }
        ,
        {
            name: "Plumstead",
            pos: { lat: 0.0844, lon: 51.4897 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-44">List of London railway stations</a>'
        }
        ,
        {
            name: "Ponders End",
            pos: { lat: -0.0349, lon: 51.642 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-45">List of London railway stations</a>'
        }
        ,
        {
            name: "Purfleet",
            pos: { lat: 0.237, lon: 51.481 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Purley",
            pos: { lat: -0.1135, lon: 51.3377 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Purley Oaks",
            pos: { lat: -0.0987, lon: 51.3469 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-10">List of London railway stations</a>'
        }
        ,
        {
            name: "Putney",
            pos: { lat: -0.2162, lon: 51.4611 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-46">List of London railway stations</a>'
        }
        ,
        {
            name: "Queen's Park",
            pos: { lat: -0.2053, lon: 51.5341 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-46">List of London railway stations</a>'
        }
        ,
        {
            name: "Queens Road Peckham",
            pos: { lat: -0.0573, lon: 51.4736 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-46">List of London railway stations</a>'
        }
        ,
        {
            name: "Queenstown Road (Battersea)",
            pos: { lat: -0.147, lon: 51.4748 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-46">List of London railway stations</a>'
        }
        ,
        {
            name: "Rainham",
            pos: { lat: 0.1905, lon: 51.5169 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-46">List of London railway stations</a>'
        }
        ,
        {
            name: "Ravensbourne",
            pos: { lat: -0.0075, lon: 51.4141 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-46">List of London railway stations</a>'
        }
        ,
        {
            name: "Raynes Park",
            pos: { lat: -0.2299, lon: 51.4094 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-46">List of London railway stations</a>'
        }
        ,
        {
            name: "Rectory Road",
            pos: { lat: -0.0681, lon: 51.5584 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceA_22-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Reedham",
            pos: { lat: -0.1233, lon: 51.3313 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceA_22-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Richmond",
            pos: { lat: -0.3014, lon: 51.463 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceA_22-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Rickmansworth",
            pos: { lat: -0.4733, lon: 51.6402 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Riddlesdown",
            pos: { lat: -0.0996, lon: 51.3323 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-47">List of London railway stations</a>'
        }
        ,
        {
            name: "Romford",
            pos: { lat: 0.1827, lon: 51.5749 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-47">List of London railway stations</a>'
        }
        ,
        {
            name: "Rotherhithe",
            pos: { lat: -0.0522, lon: 51.5008 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-47">List of London railway stations</a>'
        }
        ,
        {
            name: "Shadwell",
            pos: { lat: -0.0569, lon: 51.5112 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-47">List of London railway stations</a>'
        }
        ,
        {
            name: "St Helier",
            pos: { lat: -0.1985, lon: 51.3901 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-47">List of London railway stations</a>'
        }
        ,
        {
            name: "St James Street",
            pos: { lat: -0.0323, lon: 51.581 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-autogenerated1_48-0">List of London railway stations</a>'
        }
        ,
        {
            name: "St Johns",
            pos: { lat: -0.0225, lon: 51.4691 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-autogenerated1_48-0">List of London railway stations</a>'
        }
        ,
        {
            name: "St Margarets",
            pos: { lat: -0.3204, lon: 51.455 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-autogenerated1_48-0">List of London railway stations</a>'
        }
        ,
        {
            name: "St Mary Cray",
            pos: { lat: 0.1058, lon: 51.3947 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-autogenerated1_48-0">List of London railway stations</a>'
        }
        ,
        {
            name: "St Pancras",
            pos: { lat: -0.1261, lon: 51.5314 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_d">List of London railway stations</a>'
        }
        ,
        {
            name: "Sanderstead",
            pos: { lat: -0.094, lon: 51.3484 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_d">List of London railway stations</a>'
        }
        ,
        {
            name: "Selhurst",
            pos: { lat: -0.0883, lon: 51.3921 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-11">List of London railway stations</a>'
        }
        ,
        {
            name: "Seven Kings",
            pos: { lat: 0.0969, lon: 51.5635 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Seven Sisters",
            pos: { lat: -0.0756, lon: 51.5839 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Shepherd's Bush",
            pos: { lat: -0.2175, lon: 51.5051 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Shoreditch High Street",
            pos: { lat: -0.0768, lon: 51.5234 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Shortlands",
            pos: { lat: 0.0019, lon: 51.4058 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Sidcup",
            pos: { lat: 0.104, lon: 51.4338 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Silver Street",
            pos: { lat: -0.0676, lon: 51.6149 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Slade Green",
            pos: { lat: 0.1904, lon: 51.4678 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "South Acton",
            pos: { lat: -0.2707, lon: 51.4994 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Southall",
            pos: { lat: -0.3783, lon: 51.506 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "South Bermondsey",
            pos: { lat: -0.0548, lon: 51.4887 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-british-history.ac.uk_21-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Southbury",
            pos: { lat: -0.0524, lon: 51.6488 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-49">List of London railway stations</a>'
        }
        ,
        {
            name: "outh Greenford",
            pos: { lat: -0.3369, lon: 51.5342 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-50">List of London railway stations</a>'
        }
        ,
        {
            name: "South Hampstead",
            pos: { lat: -0.1788, lon: 51.5414 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-51">List of London railway stations</a>'
        }
        ,
        {
            name: "South Kenton",
            pos: { lat: -0.3086, lon: 51.5703 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-51">List of London railway stations</a>'
        }
        ,
        {
            name: "South Merton",
            pos: { lat: -0.2062, lon: 51.403 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-51">List of London railway stations</a>'
        }
        ,
        {
            name: "South Ruislip",
            pos: { lat: -0.3988, lon: 51.5569 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-51">List of London railway stations</a>'
        }
        ,
        {
            name: "South Tottenham",
            pos: { lat: -0.072, lon: 51.5802 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-51">List of London railway stations</a>'
        }
        ,
        {
            name: "Stamford Hill",
            pos: { lat: -0.0761, lon: 51.5749 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-51">List of London railway stations</a>'
        }
        ,
        {
            name: "Stoke Newington",
            pos: { lat: -0.0727, lon: 51.5651 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceA_22-2">List of London railway stations</a>'
        }
        ,
        {
            name: "Stonebridge Park",
            pos: { lat: -0.2754, lon: 51.544 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-ReferenceA_22-2">List of London railway stations</a>'
        }
        ,
        {
            name: "Stoneleigh",
            pos: { lat: -0.2487, lon: 51.3637 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Stratford",
            pos: { lat: -0.0037, lon: 51.5417 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Stratford International",
            pos: { lat: -0.0087, lon: 51.5448 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Strawberry Hill",
            pos: { lat: -0.3388, lon: 51.4389 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-52">List of London railway stations</a>'
        }
        ,
        {
            name: "Streatham",
            pos: { lat: -0.1311, lon: 51.426 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-12">List of London railway stations</a>'
        }
        ,
        {
            name: "Streatham Common",
            pos: { lat: -0.1359, lon: 51.4187 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-13">List of London railway stations</a>'
        }
        ,
        {
            name: "Streatham Hill",
            pos: { lat: -0.1271, lon: 51.438 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-53">List of London railway stations</a>'
        }
        ,
        {
            name: "Sudbury & Harrow Road",
            pos: { lat: -0.3167, lon: 51.554 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-autogenerated2_54-0">List of London railway stations</a>'
        }
        ,
        {
            name: "Sudbury Hill Harrow",
            pos: { lat: -0.3358, lon: 51.5589 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-autogenerated2_54-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Sundridge Park",
            pos: { lat: 0.0221, lon: 51.4137 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-55">List of London railway stations</a>'
        }
        ,
        {
            name: "Surbiton",
            pos: { lat: -0.3044, lon: 51.3926 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-55">List of London railway stations</a>'
        }
        ,
        {
            name: "Surrey Quays",
            pos: { lat: -0.0477, lon: 51.4933 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-55">List of London railway stations</a>'
        }
        ,
        {
            name: "Sutton",
            pos: { lat: -0.1903, lon: 51.3601 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-56">List of London railway stations</a>'
        }
        ,
        {
            name: "Sutton Common",
            pos: { lat: -0.1964, lon: 51.3751 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-56">List of London railway stations</a>'
        }
        ,
        {
            name: "Swanley",
            pos: { lat: -0.1733, lon: 51.3944 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-freedom_10-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Sydenham",
            pos: { lat: -0.0545, lon: 51.4268 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-freedom_10-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Sydenham Hill",
            pos: { lat: -0.0802, lon: 51.4326 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-freedom_10-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Syon Lane",
            pos: { lat: -0.3248, lon: 51.4818 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-57">List of London railway stations</a>'
        }
        ,
        {
            name: "Tadworth",
            pos: { lat: -0.236, lon: 51.292 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Tattenham Corner",
            pos: { lat: -0.2426, lon: 51.3092 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Teddington",
            pos: { lat: -0.3325, lon: 51.4247 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Thames Ditton",
            pos: { lat: -0.3383, lon: 51.3886 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Thornton Heath",
            pos: { lat: -0.1004, lon: 51.3985 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Tolworth",
            pos: { lat: -0.2793, lon: 51.3771 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Tooting",
            pos: { lat: -0.1603, lon: 51.4196 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-58">List of London railway stations</a>'
        }
        ,
        {
            name: "Tottenham Hale",
            pos: { lat: -0.0611, lon: 51.5902 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-58">List of London railway stations</a>'
        }
        ,
        {
            name: "Tulse Hill",
            pos: { lat: -0.1049, lon: 51.4399 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-14">List of London railway stations</a>'
        }
        ,
        {
            name: "Turkey Street",
            pos: { lat: -0.0474, lon: 51.6725 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-59">List of London railway stations</a>'
        }
        ,
        {
            name: "Twickenham",
            pos: { lat: -0.3296, lon: 51.4504 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-60">List of London railway stations</a>'
        }
        ,
        {
            name: "Upminster",
            pos: { lat: 0.2509, lon: 51.5588 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-60">List of London railway stations</a>'
        }
        ,
        {
            name: "Upper Holloway",
            pos: { lat: -0.1298, lon: 51.5638 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-60">List of London railway stations</a>'
        }
        ,
        {
            name: "Upper Warlingham",
            pos: { lat: -0.078, lon: 51.3085 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Vauxhall",
            pos: { lat: -0.1229, lon: 51.4859 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Victoria",
            pos: { lat: -0.1448, lon: 51.4966 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Waddon",
            pos: { lat: -0.117, lon: 51.3674 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Wallington",
            pos: { lat: -0.1533, lon: 51.3592 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Walthamstow Central",
            pos: { lat: -0.0192, lon: 51.5831 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Walthamstow Queens Road",
            pos: { lat: -0.024, lon: 51.5817 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Wandsworth Common",
            pos: { lat: -0.1635, lon: 51.4464 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-61">List of London railway stations</a>'
        }
        ,
        {
            name: "Wandsworth Road",
            pos: { lat: -0.139, lon: 51.4702 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-61">List of London railway stations</a>'
        }
        ,
        {
            name: "Wandsworth Town",
            pos: { lat: -0.1879, lon: 51.461 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-15">List of London railway stations</a>'
        }
        ,
        {
            name: "Wanstead Park",
            pos: { lat: 0.0264, lon: 51.5518 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-15">List of London railway stations</a>'
        }
        ,
        {
            name: "Wapping",
            pos: { lat: -0.0558, lon: 51.5044 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-15">List of London railway stations</a>'
        }
        ,
        {
            name: "Waterloo",
            pos: { lat: -0.1132, lon: 51.5031 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Waterloo East",
            pos: { lat: -0.1101, lon: 51.5041 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_a">List of London railway stations</a>'
        }
        ,
        {
            name: "Watford High Street",
            pos: { lat: -0.3918, lon: 51.6525 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Watford Junction",
            pos: { lat: -0.3958, lon: 51.6635 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Welling",
            pos: { lat: 0.1017, lon: 51.4647 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Wembley Central",
            pos: { lat: -0.2964, lon: 51.5519 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-62">List of London railway stations</a>'
        }
        ,
        {
            name: "Wembley Stadium",
            pos: { lat: -0.2863, lon: 51.5543 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-62">List of London railway stations</a>'
        }
        ,
        {
            name: "West Brompton",
            pos: { lat: -0.1957, lon: 51.4866 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-62">List of London railway stations</a>'
        }
        ,
        {
            name: "Westcombe Park",
            pos: { lat: 0.0187, lon: 51.4842 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-63">List of London railway stations</a>'
        }
        ,
        {
            name: "West Croydon",
            pos: { lat: -0.102, lon: 51.3785 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-63">List of London railway stations</a>'
        }
        ,
        {
            name: "West Drayton",
            pos: { lat: -0.4719, lon: 51.5101 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-64">List of London railway stations</a>'
        }
        ,
        {
            name: "West Dulwich",
            pos: { lat: -0.0906, lon: 51.4409 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-64">List of London railway stations</a>'
        }
        ,
        {
            name: "West Ealing",
            pos: { lat: -0.3203, lon: 51.5137 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-64">List of London railway stations</a>'
        }
        ,
        {
            name: "West Ham",
            pos: { lat: 0.0066, lon: 51.5284 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-64">List of London railway stations</a>'
        }
        ,
        {
            name: "West Hampstead",
            pos: { lat: -0.1913, lon: 51.5473 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-64">List of London railway stations</a>'
        }
        ,
        {
            name: "West Hampstead Thameslink",
            pos: { lat: -0.19183, lon: 51.54848 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-64">List of London railway stations</a>'
        }
        ,
        {
            name: "West Norwood",
            pos: { lat: -0.1035, lon: 51.4318 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-16">List of London railway stations</a>'
        }
        ,
        {
            name: "West Ruislip",
            pos: { lat: -0.4376, lon: 51.5696 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-16">List of London railway stations</a>'
        }
        ,
        {
            name: "West Sutton",
            pos: { lat: -0.2051, lon: 51.3662 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-16">List of London railway stations</a>'
        }
        ,
        {
            name: "West Wickham",
            pos: { lat: -0.0145, lon: 51.3813 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-16">List of London railway stations</a>'
        }
        ,
        {
            name: "Whitechapel",
            pos: { lat: -0.061, lon: 51.519 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-16">List of London railway stations</a>'
        }
        ,
        {
            name: "White Hart Lane",
            pos: { lat: -0.0711, lon: 51.6049 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-16">List of London railway stations</a>'
        }
        ,
        {
            name: "Whitton",
            pos: { lat: -0.3578, lon: 51.4495 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-borley_12-16">List of London railway stations</a>'
        }
        ,
        {
            name: "Whyteleafe",
            pos: { lat: -0.0811, lon: 51.3097 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Whyteleafe South",
            pos: { lat: -0.0768, lon: 51.3034 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Willesden Junction",
            pos: { lat: -0.2439, lon: 51.5324 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Wimbledon",
            pos: { lat: -0.2043, lon: 51.4232 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Wimbledon Chase",
            pos: { lat: -0.2142, lon: 51.4095 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Winchmore Hill",
            pos: { lat: -0.1013, lon: 51.6341 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Woodgrange Park",
            pos: { lat: 0.0454, lon: 51.5487 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Woodmansterne",
            pos: { lat: -0.1539, lon: 51.3192 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#ref_b">List of London railway stations</a>'
        }
        ,
        {
            name: "Wood Street",
            pos: { lat: -0.0021, lon: 51.5864 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-autogenerated1_48-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Woolwich Arsenal",
            pos: { lat: 0.0694, lon: 51.4898 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-autogenerated1_48-1">List of London railway stations</a>'
        }
        ,
        {
            name: "Woolwich Dockyard",
            pos: { lat: 0.0536, lon: 51.4913 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-65">List of London railway stations</a>'
        }
        ,
        {
            name: "Worcester Park",
            pos: { lat: -0.2412, lon: 51.3804 },
            description: '<br>Source: Wikipedia article <a href="http://en.wikipedia.org/wiki/List_of_London_railway_stations#cite_ref-66">List of London railway stations</a>'
        }
         ];
db.stations.save(stations);
db.stations.ensureIndex( { pos : "2d" } );
    