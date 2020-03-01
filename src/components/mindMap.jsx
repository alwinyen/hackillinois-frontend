import React from 'react'
import Graph from 'reactjs-graphs'

const vertices = [
	{ label: "Keyword", },
	{ label: "Article 1", },
	{ label: "Article 2", },
	{ label: "Article 3", },
	{ label: "Article 4", },
	{ label: "Article 5", },
	{ label: "Article 6", },
	{ label: "Article 7", },
	{ label: "Article 8", },
	{ label: "Article 9", },
	{ label: "Article 10", }
];

const edges = [
	["Keyword", "Article 1"],
	["Keyword", "Article 2"],
	["Keyword", "Article 3"],
	["Keyword", "Article 4"],
	["Keyword", "Article 5"],
	["Keyword", "Article 6"],
	["Keyword", "Article 7"],
	["Keyword", "Article 8"],
	["Keyword", "Article 9"],
	["Keyword", "Article 10"]
];

export function MindMap(){
	return (
		<Graph 
			vertices={vertices} // vertices array
			edges={edges} // edges array
			width={window.innerWidth} // width of canvas
			height={window.innerHeight - 16} // height of canvas
			autoWidth={true} // automatically sets width of canvas using width of graph
			vertexStroke="#df6766" // color of vertex border
			edgeStroke="#ebb2b2" // color of edge 
			edgeWidth={3} // thickness of edge
			vertexRadius={20} // radius of vertex
			vertexGap={500} // gap between vertices
			labelFontSize={25} // font size of labels
			inactiveVertexFill="white" // color of vertex when not hovered
			fontFamily="Odibee Sans" // name of font
			labelColor="white" // color of label
			className="className" // class name given to canvas parent
			centerInCanvas={true} // centers the whole graph horizontally and vertically
		/>
	);
}

export default MindMap;