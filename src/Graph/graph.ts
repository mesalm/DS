class Graph {
  private adjacencyList: { [key: string]: string[] } = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: string, vertex2: string): void {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  print(): void {
    console.log(this.adjacencyList);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.print();
