# 🌡️ TemperaturaUmidade - Dashboard IoT com ESP32 e MQTT

## 🧩 Descrição do Projeto
O **TemperaturaUmidade** é um projeto IoT que monitora em **tempo real** a temperatura e a umidade de um ambiente real.  
Os dados são capturados por um **ESP32** (simulado no **Wokwi**) e enviados via **MQTT**, sendo exibidos em um **dashboard web** desenvolvido com **React + Vite**.

O sistema também exibe:
- 📊 **Estatísticas de temperatura e umidade** (mínima e máxima);
- 🌐 **Status da conexão** com o ESP32;
- 🔄 **Atualização automática** dos dados coletados via MQTT.

---

## ⚙️ Tecnologias Utilizadas

### 🖥️ Frontend
- **React + Vite**
- **MQTT.js** para comunicação em tempo real
- **Bootstrap** para o design da interface

### 🔌 Microcontrolador (Simulado)
- **ESP32 (simulado no Wokwi)**
- **Bibliotecas:** `WiFi.h`, `PubSubClient.h`, `DHT.h`
- **Sensor DHT11** para leitura de temperatura e umidade

---

## 🌐 Conexão MQTT

| Parâmetro | Valor |
|------------|--------|
| **Broker** | `broker.hivemq.com` |
| **Tópico** | `mazzi22/lerSensor` |
| **Protocolo** | MQTT over WSS (`wss://broker.hivemq.com:8884/mqtt`) |

> O ESP32 publica as leituras de temperatura e umidade no tópico acima, enquanto o frontend se inscreve nesse mesmo canal para atualizar os dados do dashboard em tempo real.

---
## 🚀 Como Executar
### 🔸 Clonar o projeto
```bash
git clone https://github.com/ThiagoM22/TemperaturaUmidade.git
```

### 🔸 Instalar Dependências
```bash
npm install
```

### 🔸 Executar o servidor local
```bash
npm run dev
```

---

## 🔧 Simulação do ESP32 (Wokwi)
O código do microcontrolador foi desenvolvido e testado no simulador **Wokwi**
, garantindo compatibilidade e praticidade para testes sem hardware físico.
Você pode abrir o projeto diretamente pelo link do Wokwi:
```arduino
https://wokwi.com/projects/439815593103801345
```

---
## 👨‍💻 Autor
Desenvolvido por Mazzi
📧[thiago.mazzi2017@gmail.com]

🔗[ThiagoMZZ](https://github.com/ThiagoM22)



