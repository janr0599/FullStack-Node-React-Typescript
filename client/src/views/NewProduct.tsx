import { Link } from "react-router-dom";

function NewProduct() {
    return (
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">
                    New Product
                </h2>
                <Link
                    to="/"
                    className="bg-indigo-600 p-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors rounded-lg"
                >
                    Back to products
                </Link>
            </div>
        </>
    );
}

export default NewProduct;
