/**
 * Retorna todas as planilhas
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function getPages() {
    return SpreadsheetApp.getActiveSpreadsheet().getSheets()
}

/**
 * Converte um array em objetos, usando a primeira linha como chaves.
 * @param {Array} dados - Um array de dados a ser convertido em objetos.
 * @returns {Array} - Um array de objetos convertido a partir dos dados fornecidos.
 */
function arrayToObject(dados) {
    const keys = dados[0];
    return dados.slice(1).map((values) => {
        return keys.reduce((obj, key, index) => {
            // Verifica se a chave começa com '#'
            if (!key.startsWith("#")) {
                const value = values[index];
                obj[key] = String(value);
            }
            return obj;
        }, {});
    })
}

/**
 * Converte um objeto JavaScript em uma resposta JSON.
 * @param {Object} responseData - Os dados a serem convertidos para JSON.
 * @returns {ContentService.TextOutput} - O objeto JSON como uma saída de texto.
 */
function jsonReturn(responseData) {
    return ContentService.createTextOutput(JSON.stringify(responseData))
        .setMimeType(ContentService.MimeType.JSON)
}

/**
 * Manipula as operações GET na API, retornando dados com base nos parâmetros fornecidos.
 * @param {Object} e - O objeto de evento contendo os parâmetros da solicitação GET.
 * @returns {ContentService.TextOutput} - O resultado da operação em formato JSON.
 */
function doGet(e) {
    var id = e?.parameter?.id;
    const sheetNames = getPages().map(page => page.getName())

    const data = getPages().map((page, index) => {
        const key = sheetNames[index]
        const rawData = page.getDataRange().getValues()
        const arrayData = arrayToObject(rawData)
        return { [key]: arrayData }
    })

    return jsonReturn(data)
}
