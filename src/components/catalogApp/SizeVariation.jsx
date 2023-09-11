import "../../catalog.css";

import { ErrorMessage, Field, FieldArray } from "formik";

import Button from "./Button";
import React from "react";

const SizeVariation = ({ values }) => {
  return (
    <div className="m-2 w-full border-t-[1px] border-gray-300 p-2">
      <h1 className="text-center text-xl font-semibold dark:text-gray-300">
        Sizes
      </h1>
      <FieldArray name="sizeData">
        {(arrayHelpers) => (
          <>
            {values.sizeData.map((_, index) => (
              <div
                key={index}
                className="mb-2 grid grid-cols-1 gap-2 lg:mb-2 lg:grid-cols-3"
              >
                <div>
                  <label
                    htmlFor={`sizeData[${index}].name`}
                    className="mb-2 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <Field
                    name={`sizeData[${index}].name`}
                    placeholder="Enter name"
                    className="w-full rounded-md bg-slate-300 p-2 placeholder:text-gray-600"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name={`sizeData[${index}].name`}
                    component={"div"}
                  />
                </div>

                <div>
                  <label
                    htmlFor={`sizeData[${index}].stock`}
                    className="mb-2 dark:text-gray-300"
                  >
                    Stock
                  </label>
                  <Field
                    name={`sizeData[${index}].stock`}
                    type="number"
                    placeholder="Enter stock"
                    className="w-full rounded-md bg-slate-300 p-2 placeholder:text-gray-600"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name={`sizeData[${index}].stock`}
                    component={"div"}
                  />
                </div>

                <div>
                  <label
                    htmlFor={`sizeData[${index}].price`}
                    className="mb-2 dark:text-gray-300"
                  >
                    Price
                  </label>
                  <Field
                    name={`sizeData[${index}].price`}
                    type="number"
                    placeholder="Enter price"
                    className="w-full rounded-md bg-slate-300 p-2 placeholder:text-gray-600"
                  />
                  <ErrorMessage
                    className="text-red-500"
                    name={`sizeData[${index}].price`}
                    component={"div"}
                  />
                </div>

                <hr className="lg:invisible" />
                <hr className="lg:invisible" />
              </div>
            ))}
            <div className="flex justify-between space-x-2">
              <Button
                className=" w-1/2 flex-1 rounded-md bg-blue-custom px-4 py-2 text-white hover:bg-blue-800 lg:w-1/4"
                type="button"
                onClick={() =>
                  arrayHelpers.push({
                    price: "",
                    stock: "",
                    name: "",
                  })
                }
                label="Add Size"
              />

              <Button
                type="button"
                className=" w-1/2 flex-1 rounded-md bg-blue-custom px-4 py-2 text-white hover:bg-blue-800 lg:w-1/4"
                onClick={() =>
                  values.sizeData.length > 1
                    ? arrayHelpers.remove(values.sizeData.length - 1)
                    : null
                }
                label="Remove Size"
              />
            </div>
          </>
        )}
      </FieldArray>
    </div>
  );
};

export default SizeVariation;
