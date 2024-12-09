declare module '@mantine/core/styles.css';
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}