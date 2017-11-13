/**
	Nav
	========================

	@file      : DrawLine.js
	@author    : Joël vd Graaf
	@date      : 12-3-2010
	@copyright : Mendix
	@license   : Please contact our sales department.

	Documentation
	=============
	This widget can be used to draw lines between widgets.

	Open Issues
	===========

*/
dojo.provide("DrawLine.widget.DrawLine");

mendix.widget.declare("DrawLine.widget.DrawLine",
{
    addons: null,
    inputargs:
    {
        
        width       : 100,          // Length of the line in default procents.
        widthType   : "procent" ,   // The draw type of the line exact or variable
        thickness   : 1,            // thickness of the line in pixels
        align       : "",           // Align of the line left, center or right        
        color       : ""            // The color of the line
    },

    postCreate : function()
    {
        logger.debug(this.id + ".postCreate");
        this.createLine();
        this.actRendered();
    },

    createLine : function()
    {
        logger.debug(this.id + ".CreateTable");
        // Create default table for viewing.
        var line = document.createElement("hr");
        line.setAttribute("color", this.color);
        line.setAttribute("align",this.valign);
        line.setAttribute("height", this.thickness + "px");

        if(this.widthType == "procent")
        {
            line.setAttribute("width", this.width + "%");
        }
        else
        {
            line.setAttribute("width", this.width + "px");
        }

        this.domNode.appendChild(line);
    },    

    uninitialize : function()
    {
        logger.debug(this.id + ".uninitialize");
    }
});
