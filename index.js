const stu=[
  {
    name:"max",
    chemark:60,
    biomark:40,
    DOB:01/01/2000
  },
  {
    name:"mike",
    chemark:40,
    biomark:60,
    DOB:02/01/2000
  },
  {
    name:"milton",
    chemark:20,
    biomark:30,
    DOB:01/01/2000
  },
  {
    name:"alex",
    chemark:20,
    biomark:90,
    DOB:01/01/2000
  }
]

stu.forEach((e)=>{
  const tot=e.chemark+e.biomark;
  e.total=tot;
})

stu.sort(function(a,b){
  return b.total-a.total;
})
stu.forEach((e)=>{
  delete e.total;
})
console.log(stu)