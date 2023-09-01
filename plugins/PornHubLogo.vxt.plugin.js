let PHL_VX_API = new window.ViewXtendAPI_direct();
PHL_VX_API.suicidalInterval((die)=>{
    PHL_VX_API.get_logo().parentNode.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 177.4 49.7" style="enable-background:new 0 0 177.4 49.7;" xml:space="preserve">
    <style type="text/css">
    .st0{fill:#F7971D;}
    </style>
    <path class="st0" d="M173.7,0h-72.1c-2.2,0.3-3.5,1.6-3.7,4.1v41.4c0.2,2.5,1.4,3.9,3.7,4.1h72.2c2.2-0.3,3.5-1.6,3.7-4.1V4.1
    C177.1,1.6,175.9,0.3,173.7,0"/>
    <path d="M170.1,19.3c-1.2-1.4-2.9-2.2-4.7-2.6c-0.5-0.1-1.1-0.2-1.8-0.3c-2.4-0.2-5.4,0.7-6.8,1.9l0.3-9.7h-5.8v30h5.4V37
    c1.2,1,3.2,2.1,6.2,2.1c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.2,0c2.5,0,4.7-1,6.4-3c1.8-2,2.7-4.9,2.7-8.6
    C172.7,24,171.8,21.2,170.1,19.3 M165.4,33c-0.9,1.1-2,1.6-3.2,1.6c-1.7,0-3-0.8-4-2.3c-0.7-1.1-1.1-2.7-1.1-5
    c0-2.2,0.5-3.8,1.4-4.9c0.9-1.1,2.1-1.6,3.4-1.6c1.4,0,2.6,0.5,3.5,1.6c0.9,1.1,1.4,2.9,1.4,5.4C166.8,30.2,166.3,31.9,165.4,33
    M142.1,26.1c0,3.1-0.1,5.1-0.4,5.9c-0.3,0.8-0.8,1.5-1.6,2c-0.8,0.5-1.7,0.8-2.6,0.8c-0.9,0-1.6-0.2-2.1-0.6s-0.9-0.9-1.2-1.6
    c-0.2-0.7-0.3-2.6-0.3-5.6v-10h-5.8v13.8c0,2,0.3,3.7,0.8,4.8c0.5,1.2,1.4,2.1,2.5,2.7c1.2,0.6,2.5,1,3.9,1c0.2,0,0.4,0,0.7,0
    c0,0,0,0,0,0c3.7-0.1,5.6-1.8,6.5-2.9v2.4h5.3V16.9h-5.8L142.1,26.1z M123.3,19c-0.5-0.8-1.3-1.4-2.4-1.9c-1-0.4-2-0.7-3.2-0.7
    c0,0,0,0-0.1,0c-2.4-0.1-5.5,0.6-7,2V8.6h-5.8v30h5.8V27.8c0-1.8,0.2-3.2,0.5-4.2c0.3-0.9,0.9-1.6,1.7-2.1c0.8-0.5,1.6-0.7,2.6-0.7
    c0.8,0,1.5,0.2,2.1,0.5c0.6,0.4,0.9,0.9,1.2,1.5c0.2,0.6,0.3,2.1,0.3,4.3v11.5h5.8V25.9c0-2-0.1-3.4-0.3-4.3
    C124.2,20.7,123.9,19.8,123.3,19"/>
    <path d="M90.9,20.4c-0.2-0.9-0.6-1.8-1.2-2.5c-0.6-0.7-1.4-1.4-2.5-1.8s-2.3-0.7-3.7-0.7c-2.4-0.1-6.4,0.8-7.5,2.7v-2.2h-5.6v22.9
    h6.1V28.3c0-2.6,0.2-4.3,0.5-5.3c0.3-0.9,0.9-1.7,1.7-2.3c0.8-0.6,1.8-0.9,2.8-0.9c0.8,0,1.5,0.2,2.1,0.6c0.6,0.4,1,1,1.3,1.7
    c0.3,0.7,0.4,2.3,0.4,4.8v11.7h6.1V24.4C91.2,22.7,91.1,21.3,90.9,20.4 M62,15.3c-1.8,0.2-3.5,1.7-4.3,2.6v-2.2h-5.6v22.9h6.1v-7.1
    c0-3.9,0.2-6.5,0.5-7.7c0.3-1.2,0.8-2.1,1.4-2.5c0.6-0.5,1.3-0.7,2.2-0.7c0.9,0,1.8,0.3,2.8,1l1.9-5.3c-1.3-0.8-2.6-1.1-4-1.1
    C62.6,15.3,62.3,15.3,62,15.3 M37.3,15.3c-2.2,0-4.3,0.5-6.1,1.5c-1.8,1-3.2,2.4-4.2,4.3c-1,1.9-1.5,3.8-1.5,5.8
    c0,2.6,0.5,4.9,1.5,6.7c1,1.8,2.4,3.2,4.3,4.2c1.9,0.9,3.9,1.4,6,1.4c3.4,0,6.2-1.1,8.4-3.4s3.4-5.1,3.4-8.6c0-3.4-1.1-6.3-3.3-8.5
    C43.6,16.4,40.8,15.3,37.3,15.3 M41.3,32.4c-1.1,1.2-2.4,1.8-4,1.8s-2.9-0.6-4-1.8c-1.1-1.2-1.6-2.9-1.6-5.2s0.5-4,1.6-5.2
    c1.1-1.2,2.4-1.8,4-1.8s2.9,0.6,4,1.8c1.1,1.2,1.6,2.9,1.6,5.2C42.9,29.5,42.4,31.2,41.3,32.4 M17.8,7.5c-1.2-0.3-3.7-0.5-7.6-0.5H0
    v31.6h6.4V26.7h4.2c2.9,0,5.1-0.2,6.6-0.5c1.1-0.2,2.2-0.7,3.3-1.5s2-1.8,2.7-3.1c0.7-1.3,1.1-3,1.1-4.9c0-2.5-0.6-4.6-1.8-6.2
    C21.2,9,19.6,8,17.8,7.5 M16.9,19.3c-0.5,0.7-1.1,1.2-2,1.6s-2.5,0.5-5,0.5H6.4v-9h3.1c2.3,0,3.8,0.1,4.6,0.2c1,0.2,1.9,0.7,2.6,1.4
    c0.7,0.7,1,1.7,1,2.8C17.6,17.8,17.4,18.6,16.9,19.3"/>
    </svg>`;
    die();
}, 100)