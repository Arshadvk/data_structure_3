class graph {
    constructor() {
      this.map = new Map();
    }
    addVertex(element) {
      this.map.set(element, new Array());
    }
  
    insert(vertex, edge, isBiDirectional) {
      if (!this.map.has(vertex)) {
        this.addVertex(vertex);
      }
  
      if (!this.map.has(edge)) {
        this.addVertex(edge);
      }
  
      this.map.get(vertex).push(edge);
      if (isBiDirectional) {
        this.map.get(edge).push(vertex);
      }
    }
    delete(vertex) {
      if (this.map.has(vertex)) {
        let edges = this.map.get(vertex);
        console.log(edges);
        for (let edge of edges) {
          this.map.get(edge).splice(this.map.get(edge).indexOf(vertex), 1);
        }
        this.map.delete(vertex);
      }
    }
  
    //   display (){
    //     for(let key of this.map.keys() ){
    //         console.log(key,": ");
  
    //         for(let value of this.map.get(key)){
    //             console.log(value);
    //         }
    //     }
    //   }
  
    display() {
      for (let vertex of this.map.keys()) {
        let edge = this.map.get(vertex);
        console.log(vertex, edge);
      }
    }
  }
  
  const gr = new graph();
  
  gr.insert(3, 5, true);
  // gr.insert(3, 4, true);
  // gr.insert(5, 6, false);
  // gr.delete(3)
  gr.display();
  