import React, { Component } from 'react';

class Grades extends Component {
  render() {

    if(this.props.data){
      var grades = this.props.data.grades.map(function(grade){
        return <tr key={grade.fag}>
                  <td className="heiti">{grade.fag}</td>
                  <td>{grade.einingar}</td>
                  <td>{grade.einkunn}</td>
                  <td>{grade.misseri}</td> 
                </tr>
      })
    }

    return (
      <section id="grades">
        <div className="row grades">
          <div className="three columns header-col">
              <h1><span></span></h1>
          </div>

          <div className="nine columns main-col">
            <p>.</p>
            <div className="row item">
              <div className="twelve columns">
                <table>
                  <thead className="grades">
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades}
                  </tbody>
                </table>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </section>
      // <section id="resume">

      // <div className="row grades">
      //    <div className="three columns header-col">
      //       <h1><span>Einkunnir</span></h1>
      //    </div>

      //    <div className="nine columns main-col">
      //      <h3>Hér eru einkunnirnar mínar, nýjustu efst</h3>
      //       <div className="row item">
      //          <div className="twelve columns">
      //            {grades}
      //          </div>
      //       </div>
      //    </div>
      // </div>
      // </section>
    );
  }
}

export default Grades;
