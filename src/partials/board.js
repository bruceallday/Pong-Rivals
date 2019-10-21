import { SVG_NS } from "../settings";

export default class Board {
    constructor(width, height){
        this.width = width;
        this.height = height;
        
    }
    render(svg){

        let rect = document.createElementNS(SVG_NS, "rect");

        rect.setAttributeNS(null, "x", 0);
        rect.setAttributeNS(null, "y", 0);
        rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, "stroke", "#DD809D");
        rect.setAttributeNS(null, "fill", "#2A1140");
        rect.setAttributeNS(null, "stroke-width", "7");
        rect.setAttributeNS(null, "opacity", 0.7);

        svg.appendChild(rect);

        let line = document.createElementNS(SVG_NS, 'line');

        line.setAttributeNS(null, "x1", 250);
        line.setAttributeNS(null, "y1", 0);
        line.setAttributeNS(null, "x2", 250);
        line.setAttributeNS(null, "y2", 250);
        line.setAttributeNS(null, "stroke", "black");
        line.setAttributeNS(null, "stroke-width", 7);
        line.setAttributeNS(null, "stroke-dasharray", 6);

        svg.appendChild(line);

        let lineWhite = document.createElementNS(SVG_NS, 'line');
        lineWhite.setAttributeNS(null, "x1", 250);
        lineWhite.setAttributeNS(null, "y1", 5);
        lineWhite.setAttributeNS(null, "x2", 250);
        lineWhite.setAttributeNS(null, "y2", 250);
        lineWhite.setAttributeNS(null, "stroke", "#ff1493");
        lineWhite.setAttributeNS(null, "stroke-width", 7);
        lineWhite.setAttributeNS(null, "stroke-dasharray", 6);

        svg.appendChild(lineWhite);

        let line2 = document.createElementNS(SVG_NS, 'line');

        line2.setAttributeNS(null, "x1", 260);
        line2.setAttributeNS(null, "y1", 5);
        line2.setAttributeNS(null, "x2", 260);
        line2.setAttributeNS(null, "y2", 260);
        line2.setAttributeNS(null, "stroke", "black");
        line2.setAttributeNS(null, "stroke-width", 7);
        line2.setAttributeNS(null, "stroke-dasharray", 6);

        svg.appendChild(line2);

        let lineWhite2 = document.createElementNS(SVG_NS, 'line');
        lineWhite2.setAttributeNS(null, "x1", 260);
        lineWhite2.setAttributeNS(null, "y1", 10);
        lineWhite2.setAttributeNS(null, "x2", 260);
        lineWhite2.setAttributeNS(null, "y2", 260);
        lineWhite2.setAttributeNS(null, "stroke", "#1ff4ef");
        lineWhite2.setAttributeNS(null, "stroke-width", 7);
        lineWhite2.setAttributeNS(null, "stroke-dasharray", 6);

        svg.appendChild(lineWhite2);

        
    }

}