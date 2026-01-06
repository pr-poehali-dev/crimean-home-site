-- Создание таблицы для хранения заявок с сайта
CREATE TABLE IF NOT EXISTS contact_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для быстрого поиска по дате
CREATE INDEX idx_contact_requests_created_at ON contact_requests(created_at DESC);

-- Комментарии к таблице и колонкам
COMMENT ON TABLE contact_requests IS 'Заявки клиентов с формы обратной связи';
COMMENT ON COLUMN contact_requests.name IS 'Имя клиента';
COMMENT ON COLUMN contact_requests.phone IS 'Телефон клиента';
COMMENT ON COLUMN contact_requests.message IS 'Сообщение от клиента';
COMMENT ON COLUMN contact_requests.created_at IS 'Дата и время создания заявки';
