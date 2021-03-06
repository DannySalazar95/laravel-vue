<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>
    </head>
    <body>
        <div id="app">
        </div>
    </body>

    <!-- scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>
    <script src="{{ mix('js/css.helper.js') }}"></script>
    <script src="{{ mix('js/helper.js') }}"></script>
    <!--end scripts-->

</html>
