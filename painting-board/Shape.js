var Shape = function()
{
    var o = {
        name: 'just a shape',
        startX: null,
        startY: null,
        nowX: null,
        nowY: null,
        strokecolor: '#000000',
        strokewidth: 2,
        existposition: [],
    }
    o.setStartPosition = function(x, y) {
        o.startX = x
        o.startY = y
    }
    o.setNowPosition = function(x, y) {
        o.nowX = x
        o.nowY = y
    }
    o.getStartPosition = function() {
        return [o.startX, o.startY]
    }
    o.getNowPosition = function() {
        return [o.nowX, o.nowY]
    }
    o.resetSelf = function(new_o) {
        for (var i in o) {
            if(typeof(o[i]) != typeof(function(){}))
                o[i] = new_o[i]
        }
    }
    o.init = function(x, y) {
        o.strokecolor = strokecolor
        o.strokewidth = strokewidth
        o.startX = x
        o.startY = y
    }
    return o
}
