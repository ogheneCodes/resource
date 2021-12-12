import "./Landing.css";
import { Row, Col, Drawer } from "antd";

import heroImage from "../../assets/hero-image.png";
import groupIcon from "../../assets/group.svg";
import mountainIcon from "../../assets/mountain.svg";
import calenderIcon from "../../assets/calender.svg";
import AppCard from "../../components/app-card/AppCard";
import employee from "../../assets/employee.png";
import mailIcon from "../../assets/mail.svg";
import caseIcon from "../../assets/case.svg";
import travel from "../../assets/travel.png";
import unn from "../../assets/unn.png";
import genesys from "../../assets/genesys.png";
import pestate from "../../assets/pestate.png";
import tenece from "../../assets/tenece.png";
import payroll from "../../assets/payroll.png";
import noteIcon from "../../assets/note.svg";
import envelopeIcon from "../../assets/envelope.svg";

const Landing = () => {
  const resources = [
    {
      icon: groupIcon,
      title: "Employee Management",
      description:
        "From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team.",
    },
    {
      icon: mountainIcon,
      title: "Performance Management",
      description:
        "Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews. ",
    },
    {
      icon: calenderIcon,
      title: "Paid time off",
      description:
        "Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance.",
    },
  ];

  const sponsors = [unn, tenece, pestate, genesys];

  return (
    <div className="Landing">
      <section className="Hero">
        <div className="container">
          <Row align="middle">
            <Col sm={24} md={12} style={{ maxWidth: "50rem" }}>
              <h1 className="heading1">
                Throw paperwork into the trash where it belongs.
              </h1>
              <p className="paragraph1">
                Eliminate all the hassle involved in managing people operations
                by automating it.
              </p>
            </Col>
            <Col sm={24} md={12}>
              <img src={heroImage} alt="hero" className="Hero-image" />
            </Col>
          </Row>
        </div>
      </section>
      <section className="Resource">
        <div className="container">
          <div className="Resource-text-box">
            <h2 className="heading1">Human Resources</h2>
            <p className="paragraph1">
              Onboard new employees, manage the employee lifecycle and measure
              employee performance.
            </p>
          </div>
          <Row gutter={20}>
            {resources.map((resource) => (
              <Col sm={24} md={8}>
                <div className="mb30">
                  <AppCard {...resource} />
                </div>
              </Col>
            ))}
          </Row>
          <div className="Resource-employee">
            <img
              src={employee}
              alt="employee"
              className="Resource-employee-img"
            />
          </div>
        </div>
      </section>
      <section className="Service">
        <div className="container">
          <div style={{ marginBottom: "10rem" }} className="highlight">
            <Row gutter={100} align="middle">
              <Col sm={24} md={10}>
                <div>
                  <h2 className="heading1">Admin & Logistics</h2>
                  <p className="paragraph1">
                    Manage and track company assets as well as logistics for
                    travelling employees
                  </p>
                </div>
              </Col>
              <Col sm={24} md={7}>
                <div className="">
                  <img src={mailIcon} alt="icon" className="mb30" />
                  <h2 className="heading2 mb10">Travel & Logistics</h2>
                  <p className="paragraph2">
                    Make travel requests, get approvals, and have access to
                    travel information.
                  </p>
                </div>
              </Col>
              <Col sm={24} md={7}>
                <div className="">
                  <img src={caseIcon} alt="icon" className="mb30" />
                  <h2 className="heading2 mb10">Asset Management</h2>
                  <p className="paragraph2">
                    Manage the acquisition, assignment, and disposition of
                    assets seamlessly.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="Resource-employee mb60">
            <img
              src={travel}
              alt="employee"
              className="Resource-employee-img"
            />
          </div>
          <div className="highlight">
            <Row gutter={100} align="middle">
              <Col sm={24} md={10}>
                <div>
                  <h2 className="heading1">Finance</h2>
                  <p className="paragraph1">
                    Generate invoices, track expenditure, and manage complex
                    payrolls for multiple teams and companies
                  </p>
                </div>
              </Col>
              <Col sm={24} md={7}>
                <div className="">
                  <img src={noteIcon} alt="icon" className="mb30" />
                  <h2 className="heading2 mb10">RE Vouchers</h2>
                  <p className="paragraph2">
                    Track and manage expenditure for multiple teams across your
                    organisation using Resource Edge Vouchers
                  </p>
                </div>
              </Col>
              <Col sm={24} md={7}>
                <div className="">
                  <img src={envelopeIcon} alt="icon" className="mb30" />
                  <h2 className="heading2 mb10">Payroll</h2>
                  <p className="paragraph2">
                    Our easy to use systems takes away the pain of managing
                    complex payrolls for organisations of all sizes.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="Resource-employee mb60">
            <img
              src={payroll}
              alt="employee"
              className="Resource-employee-img"
            />
          </div>

          <div className="sponsors">
            <Row>
              {sponsors.map((sponsor) => (
                <Col span={6}>
                  <img src={sponsor} alt="sponsor" className="sponsor-image" />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
