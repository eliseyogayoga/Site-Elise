import os
import re

files = ['index.html', 'cours.html', 'contact.html', 'dessins.html', 'a-propos.html']
new_banner = """
  <div class="announcement-bar" id="promo-banner">
    <div class="container">
      <strong>🌟 SEMAINE D'ESSAI GRATUIT !</strong> Yoga sur chaise à Villiers-sur-Yonne : mardi 10h-11h, mardi 18h-19h ou jeudi 10h-11h (semaine du 22 juin). <em>Réservez votre créneau !</em>
    </div>
  </div>
"""

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    # Use regex to find and replace the whole <div class="marquee-news"> block
    pattern = re.compile(r'\s*<div class="marquee-news">.*?</div>\s*</div>\s*', re.DOTALL)
    
    if pattern.search(content):
        new_content = pattern.sub(new_banner, content)
        with open(file, 'w') as f:
            f.write(new_content)
        print(f"Updated {file}")
    else:
        print(f"Skipped {file}")

