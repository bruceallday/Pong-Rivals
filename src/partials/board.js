import { SVG_NS } from "../settings";

export default class Board {
    constructor(width, height){
        this.width = width;
        this.height = height;
        
    }
    render(svg){

        //Creating a new rect element for our SVG
        let rect = document.createElementNS(SVG_NS, "rect");

        // Crearing individual attributes for the rect element we just created.
        rect.setAttributeNS(null, "x", 0);
        rect.setAttributeNS(null, "y", 0);
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, "stroke", "#ff1493");
        rect.setAttributeNS(null, "fill", "#2A1140");
        rect.setAttributeNS(null, "stroke-width", "7");
        rect.setAttributeNS(null, "opacity", 0.5);

        // Appending our svg with the rect we just created.
        svg.appendChild(rect);

        //Creating the new line element
        let line = document.createElementNS(SVG_NS, 'line');

        //Creating elements for our new line
        line.setAttributeNS(null, "x1", 256);
        line.setAttributeNS(null, "y1", 0);
        line.setAttributeNS(null, "x2", 256);
        line.setAttributeNS(null, "y2", 256);
        line.setAttributeNS(null, "stroke", "black");
        line.setAttributeNS(null, "stroke-width", 7);
        line.setAttributeNS(null, "stroke-dasharray", 6);

        //Appending the line to the svg
        svg.appendChild(line);

        //Creating elements for our new line
        let lineWhite = document.createElementNS(SVG_NS, 'line');
        lineWhite.setAttributeNS(null, "x1", 256);
        lineWhite.setAttributeNS(null, "y1", 5);
        lineWhite.setAttributeNS(null, "x2", 256);
        lineWhite.setAttributeNS(null, "y2", 256);
        lineWhite.setAttributeNS(null, "stroke", "#ff1493");
        lineWhite.setAttributeNS(null, "stroke-width", 7);
        lineWhite.setAttributeNS(null, "stroke-dasharray", 6);

        //Appending the line to the svg
        svg.appendChild(lineWhite);

        //Creating the new line element
        let line2 = document.createElementNS(SVG_NS, 'line');

        //Creating elements for our new line
        line2.setAttributeNS(null, "x1", 265);
        line2.setAttributeNS(null, "y1", 5);
        line2.setAttributeNS(null, "x2", 265);
        line2.setAttributeNS(null, "y2", 265);
        line2.setAttributeNS(null, "stroke", "black");
        line2.setAttributeNS(null, "stroke-width", 7);
        line2.setAttributeNS(null, "stroke-dasharray", 6);

        //Appending the line to the svg
        svg.appendChild(line2);

        //Creating elements for our new line
        let lineWhite2 = document.createElementNS(SVG_NS, 'line');
        lineWhite2.setAttributeNS(null, "x1", 265);
        lineWhite2.setAttributeNS(null, "y1", 10);
        lineWhite2.setAttributeNS(null, "x2", 265);
        lineWhite2.setAttributeNS(null, "y2", 265);
        lineWhite2.setAttributeNS(null, "stroke", "#1ff4ef");
        lineWhite2.setAttributeNS(null, "stroke-width", 7);
        lineWhite2.setAttributeNS(null, "stroke-dasharray", 6);

        //Appending the line to the svg
        svg.appendChild(lineWhite2);

        
    }

}