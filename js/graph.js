new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'graph',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
    {"date":"2016-12", "electricity":"315.00", "water": "333.00", "total":"5155.00"},
    {"date":"2016-11", "electricity":"415.00", "water": "444.00", "total":"5155.00"},
    {"date":"2016-10", "electricity":"115.00", "water": "666.00", "total":"5155.00"},
    {"date":"2016-09", "electricity":"315.00", "water": "333.00", "total":"5155.00"},
    {"date":"2016-08", "electricity":"926.00", "water": "777.00", "total":"5263.00"},
    {"date":"2016-07", "electricity":"843.00", "water": "333.00", "total":"5431.00"},
    {"date":"2016-06", "electricity":"715.00", "water": "999.00", "total":"5155.00"},
    {"date":"2016-05", "electricity":"426.00", "water": "356.00", "total":"5263.00"},
    {"date":"2016-04", "electricity":"343.00", "water": "400.00", "total":"5431.00"},
    {"date":"2016-03", "electricity":"215.00", "water": "800.00", "total":"5155.00"},
    {"date":"2016-02", "electricity":"226.00", "water": "600.00", "total":"5263.00"},
    {"date":"2016-01", "electricity":"143.00", "water": "333.00", "total":"5431.00"}
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'date',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['total', "electricity", "water"],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['總費用', "電費", "水費"]
});

