import React from "react";
import Categories from "../categories/Categories";
import { useGetCarsQuery } from "@/redux/api/sclices/productSlice";
import CardItem from "../card/Card";

const Products = () => {
    const { data } = useGetCarsQuery();
    console.log(data?.payload);

    let cars = (
        <div className="cars mt-10 flex flex-col items-center justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.payload.map((item) => (
                <CardItem key={item._id} car={item} />
            ))}
        </div>
    );

    return (
        <section className="product-container p-3">
            <div className="wrapper mt-10">
                <div className="info text-center flex items-center justify-center flex-col gap-5">
                    <h2 className="text-4xl text-[#f7ede2]">
                        Discover Your Next Drive
                    </h2>
                    <p className="max-w-4xl text-sm text-slate-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Optio ipsum velit dolore sunt deleniti nisi, quia
                        ad doloribus rem? Minus aliquid esse assumenda aperiam
                        similique unde enim ratione a cumque cupiditate ea
                        beatae odio ut, laboriosam explicabo deserunt atque
                        perferendis.
                    </p>
                </div>
            </div>
            <Categories />
            {cars}
        </section>
    );
};

export default Products;
