
<!--<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>-->
<script>
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push
    (
        {
            id: 11,
            cityid: '2643743',
            appid: '631946dcaae6f50f876945a2ab0f1eb9',
            units: 'metric',
            containerid: 'openweathermap-widget-11',
        }
    );  
    (
        function() 
        {
            var script = document.createElement('script');
            script.async = true;script.charset = "utf-8";
            script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
        }
    )();
</script>

<div id="openweathermap-widget-11"></div>