import { Link } from "react-router-dom";

function Products() {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Products</h2>
                <Link
                    to="products/new"
                    className="bg-indigo-600 p-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors rounded-lg"
                >
                    Add new product
                </Link>
            </div>
        </>
    );
}

export default Products;
