import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Android_skill", content: "Android", porcentage: "85%", value: "85" },
        { id: "Java_skill", content: "Java", porcentage: "85%", value: "85" },
        {
          id: "Kotlin_skill",
          content: "Koltin",
          porcentage: "80%",
          value: "80"
        },
        { id: "Flutter_skill", content: "Flutter (Dart)", porcentage: "75%", value: "75" },
        { id: "PHP_skill", content: "PHP", porcentage: "65%", value: "65" },
        {
          id: "Javascript_skill",
          content: "JavaScript",
          porcentage: "65%",
          value: "65"
        },
        // {
        //   id: "Python_skill",
        //   content: "Python",
        //   porcentage: "75%",
        //   value: "75"
        // },
        // {
        //   id: "VanillaJS_skill",
        //   content: "VanillaJS",
        //   porcentage: "85%",
        //   value: "85"
        // },
        // {
        //   id: "Wordpress_skill",
        //   content: "Wordpress",
        //   porcentage: "80%",
        //   value: "80"
        // }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Experienced Android Developer with years of dedicated practice in crafting innovative and user-centric applications."
        },
        {
          id: "second-p-about",
          content:
            "Passionate about embracing new technologies to enhance user experiences and eager to take on challenges that drive growth."
        },
        {
          id: "third-p-about",
          content:
            "A dedicated team player who thrives in collaborative environments, and is known for a solution-oriented mindset and strong problem-solving skills."
        },
        {
          id: "third-p-about",
          content:
            "Continuously seeking opportunities to create efficient and elegant solutions that contribute to seamless app functionality and end-user satisfaction."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
