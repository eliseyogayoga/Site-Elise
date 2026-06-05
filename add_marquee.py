import os

files = ['index.html', 'cours.html', 'contact.html', 'dessins.html', 'a-propos.html']
news_html = """
  <div class="marquee-news">
    <div class="marquee-inner">
      <span>🌟 SEMAINE D'ESSAI GRATUIT ! Yoga sur chaise à Villiers-sur-Yonne : mardi 10h-11h, mardi 18h-19h ou jeudi 10h-11h (semaine du 22 juin). Réservez votre créneau ! 🌟</span>
      <span>🌟 SEMAINE D'ESSAI GRATUIT ! Yoga sur chaise à Villiers-sur-Yonne : mardi 10h-11h, mardi 18h-19h ou jeudi 10h-11h (semaine du 22 juin). Réservez votre créneau ! 🌟</span>
      <span>🌟 SEMAINE D'ESSAI GRATUIT ! Yoga sur chaise à Villiers-sur-Yonne : mardi 10h-11h, mardi 18h-19h ou jeudi 10h-11h (semaine du 22 juin). Réservez votre créneau ! 🌟</span>
    </div>
  </div>
"""

for file in files:
    with open(file, 'r') as f:
        content = f.read()
    
    # We find the end of the first marquee
    target = '    </div>\n  </div>'
    idx = content.find(target)
    
    if idx != -1 and 'marquee-news' not in content:
        # Insert right after
        insert_idx = idx + len(target)
        new_content = content[:insert_idx] + news_html + content[insert_idx:]
        with open(file, 'w') as f:
            f.write(new_content)
        print(f"Updated {file}")
    else:
        print(f"Skipped {file}")

