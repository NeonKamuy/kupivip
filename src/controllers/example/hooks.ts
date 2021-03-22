import { useState, useEffect } from "react";
import ExampleController from ".";

// Get All Example Items
export const useExample = () => {
    const [example, setExample] = useState([] as any[] /*here your resource type goes*/);

    useEffect(() => {
        ExampleController.getAll({ data: null, onLoaded: setExample });
    }, []);

    return example;
}
