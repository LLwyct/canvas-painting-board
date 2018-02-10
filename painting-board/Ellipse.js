var Ellipse = function()
{
    var o = Shape()

    o.name = 'Ellipse'

    o.drawSelf = function() {
        var centerpointx = (o.nowX+o.startX)/2
        var centerpointy = (o.nowY+o.startY)/2
        var x_width = Math.abs(o.nowX - o.startX)/2
        var y_width = Math.abs(o.nowY - o.startY)/2
        EllipseThree(centerpointx, centerpointy, x_width, y_width)
    }

    o.getStartPosition = function() {
        var centerpointx = (o.nowX+o.startX)/2
        var centerpointy = (o.nowY+o.startY)/2
        return [centerpointx, centerpointy + Math.abs(o.nowY - o.startY)/2]
    }

    function EllipseThree(x,y,a,b) {
        var ox = 0.5 * a, oy = 0.6 * b;
        context.save();
        context.translate(x, y);
        context.beginPath();
        //  设置边框的宽度
        context.lineWidth = o.strokewidth
        //  设置边框的颜色
        context.strokeStyle = o.strokecolor
        context.moveTo(0, b);
        context.bezierCurveTo(ox, b, a, oy, a, 0);
        context.bezierCurveTo(a, -oy, ox, -b, 0, -b);
        context.bezierCurveTo(-ox, -b, -a, -oy, -a, 0);
        context.bezierCurveTo(-a, oy, -ox, b, 0, b);
        context.closePath();
        context.stroke();
        context.restore();
    }
    return o
}
