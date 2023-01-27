const Course =({course}) => {
    const total = 
    course.parts.reduce((s, p) => s = s + p.exercises,0)
    //console.log(total)

    return (
        <div>
          <Header kurssi={course.name} />
          <Content parts={course.parts}/>
          <Total osa={total}/>
        </div>
      )
}


const Header = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
  }
  
  const ContentOld = (props) => {
    return (
      <div>
        <Part name={props.parts[0].name} exercises ={props.parts[0].exercises}/>
        <Part name={props.parts[1].name} exercises ={props.parts[1].exercises}/>
        <Part name={props.parts[2].name} exercises ={props.parts[2].exercises}/>
        <Part name={props.parts[3].name} exercises ={props.parts[3].exercises}/>
    </div>
    )
  }

  const Part = ({name, exercises}) => {
    return (
        <p>{name} {exercises}</p>
    )
  }

  const Total = ({osa}) => {
  return (
    <div>
    <p><b>Total of {osa} exercises</b></p>
  </div>
  )
  }

  const Content = (props) => {
    return (
      <div>
        {props.parts.map(osa => <p key={osa.id}> {osa.name} {osa.exercises}</p>)}
    </div>
    )
  }

  export default Course