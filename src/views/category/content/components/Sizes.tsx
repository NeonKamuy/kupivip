import React from "react";

export const CategoryContentSizes: React.FC<{
    sizes: string[];
    checkedSizes: Set<string>;
    onSizeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
    const { sizes, checkedSizes, onSizeCheck } = props;

    return (
        <ul>
            {sizes.map((e) => (
                <li>
                    <input
                        type="checkbox"
                        value={e}
                        id={e}
                        checked={checkedSizes.has(e)}
                        onChange={onSizeCheck}
                    />
                    <label style={{ marginLeft: 10 }} htmlFor={e}>
                        {e}
                    </label>
                </li>
            ))}
        </ul>
    );
};
