<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('fontawesome-free-6.2.1-web/fontawesome-free-6.2.1-web/css/all.min.css') }}">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>
<body>
    @inertia

    {{-- <script src="{{ asset('javascripts/jquery-1.11.0.min.js') }}"></script>
    <script src="{{ asset('javascripts/modernizr.js') }}"></script> --}}
    {{-- <script src="{{ asset('javascripts/script.js') }}"></script> --}}
    {{-- <script src="{{ asset('javascripts/plugins.js') }}"></script> --}}
    {{-- <script src="{{ asset('javascripts/custom-dashboard.js') }}"></script> --}}
</body>
</html>