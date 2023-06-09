# Network Configure

---

## set static IP address

- nmcli

```bash
nmcli connection show # get UUID of target network interface
sudo nmcli connection modify ${UUID} IPv4.address ${IP}/24 # set target IP
sudo nmcli connection modify ${UUID} IPv4.gateway ${GATEWAY} # set target gateway
sudo nmcli connection modify ${UUID} IPv4.dns ${DNS} # set target DNS
sudo nmcli connection modify ${UUID} IPv4.method manual
sudo nmcli connection down ${UUID}
sudo nmcli connection up ${UUID}
```
