export const getComponentProps = component => {
    const result = [];
    if (!component || !component.props || !Object.keys(component.props).length) return result;

    Object.keys(component.props).forEach(key => {
        result.push({ key, value: component.props[key] });
    });

    return result;
};
