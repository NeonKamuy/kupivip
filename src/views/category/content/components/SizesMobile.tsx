import React from "react";

export const CategoryContentSizesMobile: React.FC<{
    sizes: string[];
    checkedSizes: Set<string>;
    onSizeCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
    const { sizes, checkedSizes, onSizeCheck } = props;

    return (
        <div>
            {sizes.map((e) => (
                <div>
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
                </div>
            ))}
        </div>
    );
};
