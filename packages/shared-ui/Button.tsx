export function Button(props: any) {
    return <Button onClick={() => props.onClick()}>{props.children}</Button>;
}

export default Button;