import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "../context/BasketProvider";
import { WishListContext } from "../context/WishListProvider";
import { Link, useParams } from "react-router-dom";
import styles from "./Home.module.scss";

function Home() {
  const [products, setProducts] = useState([]);

  const { addBasket } = useContext(BasketContext);
  const { addwishList, isExitsWishList } = useContext(WishListContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp");
    const data = await res.json();

    setProducts(data);
  }

  return (
    <>
      <main>
        <section>
          <div className={styles.education_container}>
            <div className={styles.get_your_education}>
              <h2 className={styles.get_your}>Get your </h2>
              <span className={styles.education}>Education</span>
              <h2 className={styles.today}> today!</h2>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.popular_courses_container}>
            <h2 className={styles.popular_h1}>Popular Courses</h2>

            <div className={styles.popular_cards}>
              {products.map((x) => (
                <div key={x._id} className={styles.popular_card_items}>
                  <div
                    className={styles.wishList_btn}
                    onClick={() => addwishList(x)}
                  >
                    {isExitsWishList(x) ? (
                      <i className="fa-solid fa-heart"></i>
                    ) : (
                      <i className="fa-regular fa-heart"></i>
                    )}
                  </div>

                  <div className={styles.api_cards_image_div}>
                    <img
                      src={x.image}
                      alt=""
                      className={styles.api_cards_image}
                    />
                  </div>

                  <div className={styles.api_cards_desc}>
                    <p className={styles.api_title}>{x.title}</p>
                    <span className={styles.api_desc}>{x.desc}</span>
                  </div>

                  <div className={styles.basket_detail_btns}>
                    <button
                      className={styles.basket_btn}
                      onClick={() => addBasket(x)}
                    >
                      add basket
                    </button>
                    <button className={styles.detail_btn}>
                      <Link to={"/detail/" + x._id}>go detail</Link>
                    </button>
                  </div>

                  <div className={styles.michael_smith_container}>
                    <div className={styles.image_and_desc}>
                      <img
                        src="	https://preview.colorlib.com/theme/course/images/author.jpg"
                        className={styles.michael_smith_image}
                        alt=""
                      />
                      <p className={styles.michael_smith}>Michael Smith,</p>
                      <span className={styles.author}>Author</span>
                    </div>
                    <p className={styles.api_price}>${x.price}</p>
                  </div>

                  {/* <p>{x.price}</p> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className={styles.register_contact_container}>
            <div className={styles.register_container}>
              <h2 className={styles.register_title}>Register now and get a discount <span className={styles.elli_faiz}>50%</span> discount until 1 January</h2>
              <p className={styles.register_desc}>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
              <button className={styles.register_btn}>REGISTER NOW</button>
            </div>
            <div className={styles.contact_container}>
              
              <h2 className={styles.contact_title}>Search for your course</h2>

              <div className={styles.contact_input_container}>
                <input type="text" name="" id="" placeholder="Course Name" className={styles.course_name}/>
                <input type="text" name="" id="" placeholder="Category"/>
                <input type="text" name="" id="" placeholder="Degree"/>
                <button className={styles.search_btn}>SEARCH COURSE</button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.our_services_container}>
            <h2 className={styles.our_services_title}>Our Services</h2>

            <div className={styles.courses_cards_container}>
              <div className={styles.courses_cards_item}>
                <img src="https://preview.colorlib.com/theme/course/images/exam.svg" alt="" />
                <p>Online Courses</p>

                <span>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
