import requests
import os

brands_dir = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'brands')

# Alternative logo sources
logos = [
    {
        'name': 'dickies.png',
        'url': 'https://1000logos.net/wp-content/uploads/2021/05/Dickies-logo.png'
    },
    {
        'name': 'north-face.png',
        'url': 'https://1000logos.net/wp-content/uploads/2019/12/The-North-Face-Logo.png'
    },
    {
        'name': 'champion.png',
        'url': 'https://1000logos.net/wp-content/uploads/2021/04/Champion-logo.png'
    },
    {
        'name': 'guess.png',
        'url': 'https://1000logos.net/wp-content/uploads/2021/04/Guess-logo.png'
    }
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for logo in logos:
    try:
        print(f"Downloading {logo['name']}...")
        response = requests.get(logo['url'], headers=headers, stream=True)
        response.raise_for_status()
        
        file_path = os.path.join(brands_dir, logo['name'])
        with open(file_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"✓ Downloaded {logo['name']}")
    except Exception as e:
        print(f"✗ Failed to download {logo['name']}: {str(e)}")

print("\nDone!")