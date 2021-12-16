<?php




function sendMessage(string $nickname, string $message): string{
    return "[" . date(format: 'Y-m-d H:i:s'). "] " . $nickname . " Esta dizendo: " . strtoupper($message). PHP_EOL;
}

$result = sendMessage('Gustavo', 'Ola mundo');

echo $result;