// 百度地图API功能
var map = new BMap.Map("map");
map.centerAndZoom(new BMap.Point(120.14080 , 30.88145 ), 15);
// 启用滚轮放大缩小
map.enableScrollWheelZoom(true);
// 向地图中添加缩放控件
var ctrlNav = new window.BMap.NavigationControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    type: BMAP_NAVIGATION_CONTROL_LARGE
});
map.addControl(ctrlNav);
// 向地图中添加比例尺控件
var ctrlSca = new window.BMap.ScaleControl({
    anchor: BMAP_ANCHOR_TOP_LEFT
});
map.addControl(ctrlSca);