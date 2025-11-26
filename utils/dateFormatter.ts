import { format, parseISO, parse, isValid } from "date-fns";

/**
 * Universal Date Formatter
 * Accepts: ISO string, "MM/dd/yyyy", timestamp, or Date object
 * Returns: formatted string (default: 'EEE, d MMM yyyy')
 */
export const formatDateWithDay = (
    dateInput: string | number | Date | null | undefined,
    outputFormat: string = "EEE, d MMM yyyy"
): string | null => {
    if (!dateInput) return null;

    try {
        let date: Date;

        // 1️⃣ If already a Date object
        if (dateInput instanceof Date) {
            date = dateInput;
        }
        // 2️⃣ If it's a number (timestamp)
        else if (typeof dateInput === "number") {
            date = new Date(dateInput);
        }
        // 3️⃣ Handle strings (ISO, MM/DD/YYYY, etc.)
        else if (typeof dateInput === "string") {
            // Try ISO
            date = parseISO(dateInput);

            // Fallback: MM/dd/yyyy
            if (!isValid(date)) {
                date = parse(dateInput, "MM/dd/yyyy", new Date());
            }

            // Fallback: MM-dd-yyyy
            if (!isValid(date)) {
                date = parse(dateInput, "MM-dd-yyyy", new Date());
            }
        } else {
            return null;
        }

        // Final validation
        if (!isValid(date)) return dateInput.toString();

        return format(date, outputFormat);
    } catch {
        return dateInput ? dateInput.toString() : null;
    }
};
