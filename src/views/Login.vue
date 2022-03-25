<template>
  <div class="page">
    <div class="upper-half">
      <div class="upper-block"></div>
      <div class="logo-block">
        <div class="content">
          <img alt="Logo" src="../assets/logo.png" height="66" width="103">
        </div>
      </div>
      <div class="background-pic">
        <div class="content">
          <div class="welcome-text">
            Welcome to<br/>
            Business Analytics Online
          </div>
        </div>
      </div>
    </div>
    <div class="lower-half">
      <div class="text-and-form">
        <div class="content text-block">
          <div class="left-part">
            <div class="about">
              <b>Business Analytics</b> — a new, convenient tool for managing and forecasting your business performance,
              which
              will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
            </div>
            <div class="about-item">
              <div class="check-head">
                <img alt="check.png" src="../assets/check.png">
                <b>Interactive Reporting</b>
              </div>
              <div class="text">In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM,
                ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more
                systems that reflect different aspects of business activities.
              </div>
            </div>
            <div class="about-item">
              <div class="check-head">
                <img alt="check.png" src="../assets/check.png">
                <b>Automated data updates</b>
              </div>
              <div class="text">The application automatically updates and structures the data in just 60 seconds, saving
                you time and money.
              </div>
            </div>
            <div class="about-item">
              <div class="check-head">
                <img alt="check.png" src="../assets/check.png">
                <b>Data Security</b>
              </div>
              <div class="text">The Bank guarantees the safety of your personal data, ensuring their integrity and
                confidentiality.
              </div>
            </div>
          </div>
          <div class="right-part">
            <login-form/>
          </div>
        </div>
      </div>
      <div class="lower-block">
        <div class="content">
          <div class="upper-cellar">
            <img alt="Logo" src="../assets/logo.png" height="35" width="56">
            <div class="additional-links">
              <div>Terms & Conditions</div>
              <div>Privacy</div>
              <div>Notice at Collection</div>
              <div>CA Privacy Hub</div>
              <div>Contact Us</div>
              <div>Sitemap</div>
            </div>
          </div>
          <div class="lower-cellar">
            Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LoginForm from "@/components/LoginForm";

export default {
  name: 'Login',
  components: {LoginForm}
}
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;

  .upper-half {
    height: 50%;
    overflow: hidden;

    .upper-block {
      background-color: #333333;
      height: 53px;
    }

    .logo-block {
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
      height: 96px;
    }

    .background-pic {
      height: calc(100% - 149px);
      background: no-repeat url("../assets/login-background.jpg");
      display: flex;
      justify-content: center;
      align-items: flex-end;

      .welcome-text {
        font-size: 55px;
        line-height: 156.69%;
        color: #FFFFFF;
        width: 629px;
        margin-bottom: 70px;
      }
    }
  }

  .login-page {
    margin-top: -180px;
    width: 481px;
  }

  .lower-half {
    height: 50%;

    .text-and-form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .text-block {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 16px;
        color: #333333;
        font-size: 14px;

        .left-part {
          display: flex;
          flex-direction: column;
          gap: 15px;
          font-size: 14px;
          margin: 40px 0;

          .about {
            font-size: 16px;
          }

          b {
            font-weight: 500;
            font-size: 16px;
          }

          .about-item {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .check-head {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 15px;
            }

            .text {
              margin-left: 38px;
            }
          }
        }
      }
    }

    .lower-block {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: #333333;
      height: 175px;
      color: #FFFFFF;

      .upper-cellar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #FFFFFF;
        padding-bottom: 31px;
        margin-bottom: 30.5px;

        .additional-links {
          display: flex;
          flex-direction: row;
          gap: 20px;
          cursor: pointer;
        }
      }

      .lower-cellar {
        font-size: 15px;
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .content {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .upper-half {
      height: 140px;

      .upper-block {
        display: none;
      }

      .logo-block {
        height: 40px;
      }

      img {
        height: 30px;
        width: 52px;
      }

      .background-pic {
        height: calc(100% - 40px);

        .welcome-text {
          text-align: center;
          font-size: 20px;
          margin-bottom: 20px;
        }
      }
    }

    .lower-half {
      height: auto;

      .text-and-form {

        .right-part {
          margin-top: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .text-block {
          display: flex;
          flex-direction: column-reverse;

          .left-part {
            margin: 20px 10px 20px 10px;
          }

          .login-page {
            margin-top: 0;
          }
        }
      }

      .lower-block {
        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        img {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .lower-half {
      .lower-block {
        .content {
          margin: 0 10px;
          align-items: normal;

          .upper-cellar {
            padding-bottom: 1px;
            border: none;
            margin: 0;

            .additional-links {
              flex-direction: column;
              gap: 0;
            }
          }

          .lower-cellar {
            padding: 6px 0 0 0;
          }
        }
      }
    }
  }
}

</style>
