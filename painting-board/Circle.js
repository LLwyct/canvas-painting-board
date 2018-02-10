var Circle = function()
{
    var o = Shape()

    o.name = 'Circle'

    o.drawSelf = function() {
        context.beginPath();
        var centerpointx = (o.nowX+o.startX)/2
        var centerpointy = (o.nowY+o.startY)/2
        var radius = Math.sqrt((o.nowX-o.startX)*(o.nowX-o.startX) + (o.nowY-o.startY)*(o.nowY-o.startY)) / 2
        context.arc(centerpointx, centerpointy,radius,0,Math.PI * 2,false);
        //  context.fillStyle = 'green'
        //  context.fill()
        //  设置边框的宽度
        context.lineWidth = o.strokewidth
        //  设置边框的颜色
        context.strokeStyle = o.strokecolor
        context.stroke();
    }
    return o
}
