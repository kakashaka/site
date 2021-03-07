import React,{Component} from "react"
import './App.css';
class App extends  Component{
  constructor(props){
    super();
    this.state={username:"",email:"",password1:"",password2:"",items:[],isLoaded:false}
  }
  componentDidMount(){
    fetch("http://4262bdcc3f19.ngrok.io/products/",{
      method:"get",
      mode:"cors",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json",
        "Authorization":"token 42395d040908c1bf20d180bdbbacf7b60eb8d38e"
      }
    })
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        isLoaded:true,
        items:json,
      })
    })
  }
   async postData(params){
     debugger
     alert(this.state.username)
     try{
let result=await fetch("http://4262bdcc3f19.ngrok.io/registration/",{
method:"post",
mode:"cors",
headers:{
  "Accept":"application/json",
  "Content-type":"application/json"
},
body:JSON.stringify({
  username : params.username,
  email : params.email,
  password1 : params.password1,
  password2 : params.password2
})
});
console.log(result)
     }catch(e){
       alert(e)
     }
   }
    submit(event){
      event.preventDefault()
    }
    change(event){
      this.setState({username:event.target.value})
    }
    change1(event){
this.setState({email:event.target.value})
    }
  change2(event){
    this.setState({password1:event.target.value})
  }
  change3(event){
    this.setState({password2:event.target.value})
  }
  render(){
    var {isLoaded,items}=this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }
    debugger
    return <div>
       <ul>
        {this.state.items.all_products.map((item,index)=><li>{item.pk}</li>)}
       </ul>
      <form method="post" onSubmit={this.submit.bind(this)}>
        <input onChange={this.change.bind(this)}  type="text"></input>
        <input onChange={this.change1.bind(this)} type="text"></input>
        <input onChange={this.change2.bind(this)} type="text"></input>
        <input onChange={this.change3.bind(this)} type="text"></input>
         <button type="submit" onClick={()=>this.postData(this.state)}>ready to fuck</button>
      </form> 
     </div>
  }}
export default App;