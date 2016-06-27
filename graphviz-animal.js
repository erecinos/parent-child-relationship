var util = require('util'),
  graphviz = require('graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Animal)
var n1 = g.addNode( "Animal", {"color" : "blue"} );
n1.set( "style", "filled" );

// Add node (ID: Mammal)
g.addNode( "Mammal" );
g.addNode( "Reptile");
g.addNode( "Bird");
g.addNode( "Fish" );
g.addNode("Insect");

// Add edge between the two nodes
var m = g.addEdge( "Mammal", n1 );
m.set( "color", "red" );

var r = g.addEdge( "Reptile", n1 );
r.set( "color", "red" );

var b = g.addEdge( "Bird", n1 );
b.set( "color", "red" );

var f = g.addEdge( "Fish", n1 );
f.set( "color", "red" );

var i = g.addEdge( "Insect", n1 );
i.set( "color", "red" );

// Print the dot script
console.log( g.to_dot() );

// Set GraphViz path (if not in your path)
g.setGraphVizPath("/usr/local/bin")
// Generate a PNG output
g.output( "png", "test01.png" );
