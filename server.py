import http.server
import socketserver
import os

PORT = 3000

# Ensure the server correctly handles modern web assets and JSON configurations
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.manifest': 'text/cache-manifest',
    '.html': 'text/html',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.css': 'text/css',
    '.js': 'application/x-javascript',
    '.json': 'application/json',
})

print(f"\033[92m[Success] MNT Varahi Banquets portal preparing to launch...")
print(f"Serving local environment at http://localhost:{PORT}\033[0m")
print("Press Ctrl+C to terminate the active local server instance.")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[Server Stopped] Shutting down clean.")