var Eraser = function()
{
    var o = {
		x: null,
		y: null,
	}

    o.name = 'Eraser'

    o.setPosition = function(x, y) {
        o.x = x
		o.y = y
    }

	o.clear = function() {
        var tempmartix = []
        for(var i = o.x-2;i<o.x+3;i++)
        {
            for(var j = o.y-2;j<o.y+3;j++)
            {
                for (var k = 0; k < martix[i][j].length; k++) {
                    if(tempmartix[tempmartix.length>0?tempmartix.length-1:0] != martix[i][j][k])
                        tempmartix.push(martix[i][j][k])
                        martix[i][j].splice(k, 1)
                }
            }
        }
        console.log(tempmartix);
		if(tempmartix != [])
        {
            var downindex = null
            for(var i=0;i<shapelist.length;i++)
            {
                for (var j = 0; j < tempmartix.length; j++) {
                    if(tempmartix[j] == shapelist[i]) {
                        downindex = i
                        break
                    }
                }
                if(downindex != null) break
            }
            if(downindex != null) {
                var tempstack = []
                for(var i=downindex+1;i<shapelist.length;i++)
                {
                    var appared = false
                    for (var j = 0; j < tempmartix.length; j++)
                    {
                        if(shapelist[i] == tempmartix[j]) {
                            tempmartix.splice(j, 1)
                            appared = true
                            break
                        }
                    }
                    if(!appared) {
                        tempstack.push(shapelist[i])
                    }
                }
                shapelist.splice(downindex, shapelist.length)
                context.putImageData(datalist[downindex], 0, 0)
                datalist.splice(downindex, datalist.length)
                while(tempstack.length != 0) {
                    datalist.push(context.getImageData(0, 0, width, height))
                    shapelist.push(tempstack.shift())
                    shapelist[shapelist.length-1].drawSelf()
                }
            }
        }
	}

    return o
}
