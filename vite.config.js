import restart from 'vite-plugin-restart'

export default {
    root: 'src/', 
    publicDir: '../static/', 
    server:
    {
        host: true, 
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) 
    },
    build:
    {
        outDir: '../dist', 
        emptyOutDir: true, 
        sourcemap: true 
    },
    plugins:
    [
        restart({ restart: [ '../static/**', ] }) 
    ],
}