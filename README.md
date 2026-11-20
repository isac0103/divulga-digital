# Vértice Creative — site da agência

Site responsivo feito com Python + Flask, HTML, CSS e JavaScript.

## Como executar
1. Instale Python 3.10 ou superior.
2. Abra o terminal na pasta do projeto.
3. (Opcional, recomendado) Crie um ambiente virtual:
   - Windows: `py -m venv .venv` e `.venv\\Scripts\\activate`
   - macOS/Linux: `python3 -m venv .venv` e `source .venv/bin/activate`
4. Instale as dependências: `pip install -r requirements.txt`
5. Inicie: `python app.py`
6. Abra `http://127.0.0.1:5000`.

## Personalização obrigatória antes de publicar
- No arquivo `templates/index.html`, procure `5511999999999` e troque pelo WhatsApp da agência, com código do país e DDD, só números.
- Troque “VÉRTICE” e “CREATIVE STUDIO” pelo nome da sua agência.
- Revise quantidades e entregas dos planos para refletirem exatamente o que a agência consegue entregar.
- Para publicar na internet, hospede a aplicação Flask em um serviço compatível com Python (por exemplo, Render ou Railway) e configure `debug=False` no ambiente de produção.

## Observação sobre os planos
O site usa como sugestão inicial os volumes apresentados no briefing: Mini (3 artes + 1 vídeo), Intermediário (6 artes + 3 vídeos) e Top (12 artes + 6 vídeos). Ajuste-os antes de aceitar clientes. O gerenciamento de redes sociais só deve ocorrer mediante autorização expressa e acesso seguro, preferencialmente por permissões oficiais da plataforma.
