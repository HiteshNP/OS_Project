
import http.server
import socketserver
import psutil
import json

PORT = 8000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/usage':
            cpu_usage = psutil.cpu_percent(interval=0.1)
            memory_usage = psutil.virtual_memory().percent
            disk_usage = psutil.disk_usage('/').percent
            data = {'cpuUsage': cpu_usage, 'memoryUsage': memory_usage, 'diskUsage': disk_usage}
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(data).encode())
        else:
            super().do_GET()

httpd = socketserver.TCPServer(("", PORT), CustomHandler)

print(f"Serving at http://localhost:{PORT}")
httpd.serve_forever()
