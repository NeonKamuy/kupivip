import { wrap } from "lodash";
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ICategoryContent } from "../../product/constants";
import { useSizes } from "./hooks";

export const CategoryContent: React.FC<{ contents: ICategoryContent[] }> = (
    props
) => {
    const { contents } = props;
    const sizes = useSizes(contents);

    const [checkedSizes, setCheckedSizes] = useState<Set<string>>(
        new Set<string>()
    );
    const onSizeCheck = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          const target = e.currentTarget;
          setCheckedSizes(checkedSizes => {
            const newChecked = new Set([...checkedSizes, target.value]);
            checkedSizes.has(target.value) && newChecked.delete(target.value);
            return newChecked;
          });
        },
        []
    );

    return (
        <div className="container" style={containerStyles}>
            <div style={sizeStyles}>
                {sizes.map((e) => (
                    <div style={checkboxStyles}>
                        <input
                            type="checkbox"
                            value={e}
                            id={e}
                            checked={checkedSizes.has(e)}
                            onChange={onSizeCheck}
                        />
                        <label style={{marginLeft: 10}} htmlFor={e}>{e}</label>
                    </div>
                ))}
            </div>

            <div style={contentsStyles}>
                {(checkedSizes.size ? contents.filter(e => e.sizes.some(e => checkedSizes.has(e.name))) : contents).map((e) => (
                    <Link to={`/products/${e.slug}`}>
                        <div style={contentStyles}>
                            <div>Brand: {e.brand}</div>
                            <div>Title: {e.title}</div>
                            {e.discountlessPrice && (
                                <div>
                                    Discountless Price: {e.discountlessPrice}
                                </div>
                            )}
                            <div>Price: {e.price}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const containerStyles: any = {
    color: "black",
    margin: "50px auto",
    lineHeight: 1.8,
};

const contentsStyles: any = {
    display: "flex",
    flex: "1",
    flexWrap: "wrap",
};

const contentStyles: any = {
    border: "1px solid black",
    width: "250px",
    marginBottom: 50,
    marginLeft: 20,
    padding: 20,
};

const sizeStyles: any = {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 50,
    padding: "10px 50px",
};

const checkboxStyles: any = {
  width: 150
};
