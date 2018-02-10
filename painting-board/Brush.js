var Brush = function()
{
    var o = {
        brushtype: [],
        type: 0,
        ismousedown: false,
        now_use_shape: null,
    }
    o.setType = function(pos) {
        o.type = pos
    }
    o.registerAction = function(callback) {
        o.brushtype.push(callback)
    }
    o.draw = function() {
        o.now_use_shape = o.brushtype[o.type]()
        return o.now_use_shape
    }
    o.getStartPosition = function() {
        return [o.now_use_shape.startX, o.now_use_shape.startY]
    }
    o.getNowPosition = function() {
        return [o.now_use_shape.nowX, o.now_use_shape.nowY]
    }
    return o
}
