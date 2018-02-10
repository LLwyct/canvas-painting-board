var Arc = function()
{
    var o = Shape()
    o.name = 'Arc'
    o.pointlist = []
    o.setStartPosition = function(x, y) {
        o.pointlist.push([x,y])
        o.startX = x
        o.startY = y
    }
    o.setNowPosition = function(x, y) {
        o.pointlist.push([x,y])
        o.nowX = x
        o.nowY = y
    }
    o.drawSelf = function() {
        var length = o.pointlist.length;
        context.beginPath();
        context.moveTo(o.pointlist[0][0], o.pointlist[0][1]);
        // 设置线的宽度
        context.lineWidth = o.strokewidth
        // set line color
        context.strokeStyle = o.strokecolor
        context.lineCap = 'round'
        for (var i = 1; i < o.pointlist.length; i++) {
            context.lineTo(o.pointlist[i][0], o.pointlist[i][1]);
            context.stroke();
        }
    }
    return o
}
